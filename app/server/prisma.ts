import {Prisma } from "./generated/prisma";


const prisma= new Prisma({
    endpoint: 'http://192.168.99.100:5577',
})

export default prisma


