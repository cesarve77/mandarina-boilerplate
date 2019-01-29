import {Schema} from 'mandarina'

export const LinkSchema = new Schema({
    id: {type: String},
    text: {type: String},
    link: {type: String, validators: ['required']},
}, {
    name: 'Link',
})








