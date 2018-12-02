import {Table} from "mandarina";
import {privateKey} from '../security/private-key'
import {Context} from "../../server/server";
//import * as Sentry from '@sentry/browser';

export const SignIn = new Table({
    email: {type: String, validators: ['required']},
    password: {type: String, validators: ['required']},
    staySignIn: {type: Boolean, description: 'Keep the season open up to 15 days'},
}, {
    name: 'SignIn',
    virtual: true,
    resolvers: {
        signIn: {
            resolver: async (_: any, {data: {email, password, staySignIn}}: { data: { email: string, password: string, staySignIn: boolean } }, {prisma, request}: Context, info: any) => {
                /* SERVER-START */
                const user = await prisma.query.user({where: {email}}, '{id,email,roles,hash}')
                if (!user) throw new Error('Email not found')
                if (!user.hash) throw new Error('No Password set')
                const bcrypt = require('bcrypt')
                if (!bcrypt.compareSync(password, user.hash)) throw new Error('Wrong password')
                const jwt = require('jsonwebtoken')
                // 12h = 43200
                // 15d = 1296000
                const exp = staySignIn ? Math.floor(Date.now() / 1000) + (43200) : Math.floor(Date.now() / 1000) + (1296000)
                const data = {id: user.id, roles: user.roles, exp, staySignIn}
                const token = jwt.sign(data, privateKey, {algorithm: "RS256"});

                return token
                /* SERVER-END */
            },
            type: "mutation",
            result: "String!",
        }
    }
})

export const SignUp = new Table({
    email: {type: String},
    firstName: {type: String, validators:['required']},
    password: {type: String},
    repeat: {type: String}
}, {
    name: 'SignUp',
    virtual: true,
    resolvers: {
        signUp: {
            resolver: async (_: any, {data: {email, password, firstName}}: { data: { email: string, password: string,firstName: string } }, {request, prisma}: Context, info: any) => {
                /* SERVER-START */
                if (process.env.BROWSER) throw Error('resolver can not be called in browser')
                const bcrypt = require('bcrypt')
                const {aggregate: {count}} = await prisma.query.usersConnection({where: {email}}, '{aggregate{count}}')
                if (count) throw new Error('Email already exists')
                const hash = bcrypt.hashSync(password, 3);
                const exp = Math.floor(Date.now() / 1000) + (43200)
                const user = await prisma.mutation.createUser({
                    data: {
                        firstName,
                        email,
                        hash,
                        roles: {set: ['updateMyProfile']}
                    }
                }, '{id,email,roles}')
                const jwt = require('jsonwebtoken')

                const data = {
                    id: user.id,
                    roles: user.roles,
                    staySignIn: false,
                    exp
                }
                const token = jwt.sign(data, privateKey, {algorithm: "RS256"});
                return token
                /* SERVER-END */

            },
            type: "mutation",
            result: "String!",
        }
    }
})
