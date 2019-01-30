import {Prisma } from "./generated/prisma";
import { PRISMA_HOST } from './config';

const prisma= new Prisma({
    endpoint: PRISMA_HOST,
    secret: '7Phk8i3M29wTutl7TFRrlPM7NrGFJaxEPEOMLFoDEIlWZwUGZBYafA5QSzlrzGTd9xPK03buzmhoGZUvqGut7n9NNi2cPLfM6UmWLlg8wlm2a5mpBEIwRG9uO1xrAA3w'

})

export default prisma


