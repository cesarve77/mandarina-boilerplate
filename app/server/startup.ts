import path from "path";
import {Table} from "mandarina";
import {Context} from "./server";
import {publicKey} from "../lib/security/public-key";
import jwt from 'jsonwebtoken'
import {GraphQLResolveInfo} from "graphql";
import {User} from "./generated/prisma";


export const getUser = async ({token, prisma}: Context, info?: GraphQLResolveInfo | string) => {
    if (!token) return
    let user: User
    try {
        user=jwt.verify(token, publicKey)
    } catch (e) {
        throw new Error('401 token expired!')
    }
    if (typeof info==='string') info=`{user ${info}}`
    return user

}

Table.configure({
    prismaDir: path.join(__dirname, '../../prisma'),
    getUser: async (context) => {
        // @ts-ignore
        return await getUser(context, '{id,roles}')
    }
})



