import path from "path";
import {Mandarina} from "mandarina";
import {Context} from "./server";
import jwt from 'jsonwebtoken'
import {GraphQLResolveInfo} from "graphql";
import {User} from "./generated/prisma";
import fs from "fs";


const rawData = fs.readFileSync(path.join(process.cwd(), 'mandarina.json'), 'utf8')
export const config = JSON.parse(rawData)

export const getUser = async ({token, prisma}: Context, info?: GraphQLResolveInfo | string) => {
    if (!token) return
    let user: User
    try {
        user = jwt.verify(token, config.secret)
    } catch (e) {
        throw new Error('401 token expired!')
    }
    return user

}

Mandarina.configure({
    getUser: async (context) => {
        // @ts-ignore
        return await getUser(context, '{id,roles}')
    }
})



