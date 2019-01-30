import {Table} from 'mandarina-server'
import {UserSchema} from "../../lib/schemas/User";

export const User = new Table(UserSchema, {
    name: 'User',
})





