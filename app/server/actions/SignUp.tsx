import {CustomAction} from "mandarina-server";
import {SignUpSchema} from "../../lib/forms/SignUp";
import jwt from "jsonwebtoken";
import prisma from  '../../server/prisma';
import bcrypt from  'bcrypt'






export const signUp = async ({data: {email,firstName, password}}: { data: { email: string,firstName:string, password: string } }) => {
    if (process.env.BROWSER) throw Error('resolver can not be called in browser')
    const exists = await prisma.exists.User({email})
    if (exists) throw new Error('Email already exists')
    const hash = bcrypt.hashSync(password, 3);
    const expiresIn ='12h'
    const user = await prisma.mutation.createUser({
        data: {
            firstName,
            email,
            hash,
            roles: {set: ['updateMyProfile']}
        }
    }, '{id,email,roles}')

    const data = {
        id: user.id,
        roles: user.roles,
        staySignIn: false,
    }
    const token = jwt.sign(data, 'privateKey', {algorithm: "RS256",expiresIn});
    return token

}

export const SignUpAction = new CustomAction(SignUpSchema, {
    actions: {
        signUp: {
            action: async (_: any, {data: {email,firstName, password}}: { data: { email: string, firstName:string,password: string} }) => {
                return signUp({data: {email,firstName, password}})
            },
            type: "mutation",
            result: "String!",
        }
    }
})

