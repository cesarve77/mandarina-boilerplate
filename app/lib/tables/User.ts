import {Table} from 'mandarina'
import {nobody} from "../types/permissions";

export const User = new Table({
    firstName: {type: String, validators: ['required']},
    surname: {label: 'Last name', type: String},
    email: {
        type: String,
        unique: true,
        validators: ['required', 'isEmail'],
        permissions: {read: 'everybody'},
    },
    hash: {type: String, permissions: nobody},
    roles: {type: [String], permissions: nobody},
}, {
    name: 'User',
    permissions: {
        filter: ({userId, roles}) => {
            if (roles.includes('admin')) {
                return
            }
            return {id: userId}
        }
    }
})








