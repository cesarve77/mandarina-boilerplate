import path from "path";
import Mandarina from "mandarina-server";
import {Context} from "./server";
import jwt from 'jsonwebtoken'
import {GraphQLResolveInfo} from "graphql";
import fs from "fs";

const rawData = fs.readFileSync(path.join(process.cwd(), 'mandarina.json'), 'utf8')
export const config = JSON.parse(rawData)

export const getUser = async ({token, prisma}: Context, info?: GraphQLResolveInfo | string) => {
    if (!token) return
    let user: { id: string, roles: string[] }
    try {
        user = jwt.verify(token, config.secret)
    } catch (e) {
        throw new Error('401 token expired!')
    }
    return user

}


console.log('Mandarina',Mandarina)
Mandarina.configure({
    getUser: async (context) => {
        // @ts-ignore
        return await getUser(context, '{id,roles}')
    }
})



