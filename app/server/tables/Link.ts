import {Table} from 'mandarina'
import {LinkSchema} from "../../lib/schemas/Link";

export const Link = new Table(LinkSchema, {
    name: 'Link',
})
