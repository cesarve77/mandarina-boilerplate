import {CustomAction} from "mandarina-server";
import {SignInSchema} from "../../lib/forms/SignIn";
import jwt from "jsonwebtoken";
import prisma from  '../../server/prisma';
import bcrypt from  'bcrypt'
import {config} from "../startup";

//import * as Sentry from '@sentry/browser';

export const SignInAction = new CustomAction(SignInSchema, {
    actions: {
        signIn: {
            action: async (_: any, {data: {email, password, staySignIn}}: { data: { email: string, password: string, staySignIn: boolean } }) => {
                const user = await prisma.query.user({where: {email}}, '{id,email,roles,hash}')
                if (!user) throw new Error('Email not found')
                if (!user.hash) throw new Error('No Password set')
                if (!bcrypt.compareSync(password, user.hash)) throw new Error('Wrong password')
                const expiresIn = staySignIn ? '12h' : '30d'
                const data = {id: user.id, roles: user.roles, staySignIn}
                const token = jwt.sign(data, config.secret, {algorithm: "RS256", expiresIn});
                return token
            },
            type: "mutation",
            result: "String!",
        }
    },

})

