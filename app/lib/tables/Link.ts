import {Table} from 'mandarina'

export const Link = new Table({
    text: {type: String},
    link: {type: String, validators: ['required']},
}, {
    name: 'Link',
})








