import {Table} from 'mandarina-server'
import {LinkSchema} from "../../lib/schemas/Link";

export const Link = new Table(LinkSchema, {
    name: 'Link',
})
