import './startup'
import {GraphQLServer} from "graphql-yoga";
import { Mandarina, AuthTable } from "mandarina"
import path from 'path'
import {fileLoader, mergeTypes} from "merge-graphql-schemas";
import "../lib/tables"
import "../lib/forms"
import './fixtures'
import prisma from "./prisma";
import {ContextParameters} from "graphql-yoga/dist/types";
import {Context as ContextTable} from 'mandarina/build/Table/Table'
import {Prisma} from "./generated/prisma";

Mandarina.saveFiles();

let Query = { ...Mandarina.getQuery(), ...AuthTable.resolvers };
let Mutation = Mandarina.getMutation();

AuthTable.saveFiles();


const inputs = fileLoader(path.join(__dirname, '../../prisma/datamodel/*.input.*'), {
    recursive: true,
    extensions: ['.graphql']
})
const operations = fileLoader(path.join(__dirname, '../../prisma/datamodel/*.operations.*'), {
    recursive: true,
    extensions: ['.graphql']
})
const generated = fileLoader(path.join(__dirname, './generated'), {recursive: true, extensions: ['.graphql']})

const typeDefs = mergeTypes([...generated, ...inputs, ...operations], {all: true})


let resolvers = {
    Query,
    Mutation
}


// @ts-ignore
export interface Context extends ContextTable {
    prisma: Prisma
    token: string
}


const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: (req: ContextParameters): Context => {
        let token = (<string>req.request.headers.authorization || '').replace(/^Bearer /,'');
        return ({
            ...req,
            token,
            prisma,
        });
    },
})


const port = 8000;


server.start({port}, ({port}) => console.log(`GraphQL server is running on http://localhost:${port}`))

