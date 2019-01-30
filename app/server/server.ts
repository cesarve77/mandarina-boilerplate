import './startup'
import {GraphQLServer} from "graphql-yoga";
import Mandarina ,{Auth} from "mandarina-server"
import path from 'path'
import {fileLoader, mergeTypes} from "merge-graphql-schemas";
import "../lib/schemas"
import "./tables"
import "../lib/forms"
import prisma from "./prisma";
import {ContextParameters} from "graphql-yoga/dist/types";
import {Context as ContextTable} from 'mandarina-server/build/Table/Table'
import {Prisma} from "./generated/prisma";
import './fixtures'
import {config} from "./startup";


const authResolvers = config.options && config.options.auth ? Auth.resolvers : {}
const Query = {...Mandarina.getQuery(), ...authResolvers}
const Mutation = Mandarina.getMutation()

const inputs = fileLoader(path.join(process.cwd(), config.dir.prisma, 'datamodel/*.input.*'), {
    recursive: true,
    extensions: ['.graphql']
})
const operations = fileLoader(path.join(process.cwd(), config.dir.prisma, 'datamodel/*.operations.*'), {
    recursive: true,
    extensions: ['.graphql']
})

const generated = fileLoader(path.join(process.cwd(), config.dir.generated), {
    recursive: true,
    extensions: ['.graphql']
})

const typeDefs = mergeTypes([...generated, ...inputs, ...operations], {all: true})

let resolvers = {
    Query,
    Mutation
}


// @ts-ignore
export interface Context extends ContextTable {
    prisma: Prisma
    token?: string

    [rest: string]: any
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: (req: ContextParameters): Context => {
        console.log('last request:', new Date())
        let token = (<string>(req.request && req.request.headers && req.request.headers.authorization) || '').replace(/^Bearer /, '');
        return ({
            ...req,
            token,
            prisma,
        });
    },
})


const port = 8000;


server.start({port}, ({port}) => console.log(`GraphQL server is running on http://localhost:${port}`))

