import {Schema} from "mandarina";



const schemaDefinition = {
    email: {type: String},
    name: {type: String, validators: ['required']},
    password: {type: String},
    repeat: {type: String}
};
export const SignUpSchema = new Schema(schemaDefinition, {name: 'SignUp'})

