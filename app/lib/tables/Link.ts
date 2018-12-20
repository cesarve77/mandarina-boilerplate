import { Table } from 'mandarina'
import { Link as LinkSchema } from '../schemas/Link';

const options = {
    name: 'Link'
};

export const Link = new Table(LinkSchema, options);
