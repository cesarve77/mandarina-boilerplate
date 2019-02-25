import {Schema} from "mandarina";


const schemaDefinition = {
    email: {type: String, validators: ['required']},
    password: {type: String, validators: ['required'], form: {type: 'password'}},
    staySignIn: {type: Boolean, description: 'Keep the season open up to 15 days'},
}

export const SignInSchema = new Schema(schemaDefinition, {name: 'SignIn',})


