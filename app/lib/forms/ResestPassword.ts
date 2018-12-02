import {Table} from "mandarina";
import {privateKey} from "../security/private-key";
import HiddenField from "uniforms-antd/HiddenField"

export const ResetPassword = new Table({
    token: {type: String, validators: ['required'], form: {component: HiddenField}},
    password: {label: 'Set your password', type: String, validators: ['required']},
}, {
    name: 'ResetPassword',
    errorFromServerMapper: (field, error) => {
        if (field === 'token' && error && error.message && error.message === 'GraphQL error: jwt expired') return 'Token Expired'
        return
    },
    virtual: true,
    resolvers: {
        resetPassword: {
            resolver: async (_: any, {data: {token, password}}: { data: { token: string, password: string } }, {prisma}: any, info: any) => {
                /* SERVER-START */
                const jwt = require('jsonwebtoken')
                const {userId, exp} = jwt.verify(token, privateKey, {algorithm: "RS256"});
                if (exp < new Date().getTime() / 1000) throw new Error('Token Expired!')
                const exists = await prisma.exists.Token({token})
                if (!exists)  throw new Error('Token already used!')
                prisma.mutation.deleteToken({token},'{id}')
                const bcrypt = require('bcrypt')
                const hash = bcrypt.hashSync(password, 3);
                const user = await prisma.mutation.updateUser({where: {id: userId}, data: {hash}}, '{id,roles,hash}')
                const data = {id: user.id, roles: user.roles,}
                return jwt.sign(data, privateKey, {algorithm: "RS256"});
                /* SERVER-END */
            },
            type: "mutation",
            result: "String!",
        }
    },
})
