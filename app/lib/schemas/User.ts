import {Schema} from 'mandarina'
import {nobody} from "../types/permissions";

export const UserSchema = new Schema({
    firstName: {type: String, validators: ['required']},
    email: {
        type: String,
        unique: true,
        validators: ['required', 'isEmail'],
        permissions: {read: ['everybody']},
    },
    hash: {type: String, permissions: nobody},
    roles: {type: [String], permissions: nobody},
}, {
    name: 'User',

})








