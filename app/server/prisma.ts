import {Prisma } from "./generated/prisma";
import { PRISMA_HOST } from './config';

const prisma= new Prisma({
    endpoint: PRISMA_HOST,
})

export default prisma


