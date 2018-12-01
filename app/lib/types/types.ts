import {four, two} from "../forms/spans";

export const gender = {
    type: String,
    validators: [{isAllowed: ['Female', 'Male']}],
    form: four
}

export const name = {
    firstName: {type: String, form: two},
    surname: {label: 'Last name', type: String, form: two},
}

export const dateOfBirth = {
    type: Date,
    form: four

}

export const nationality = {
    type: String,
    form: four
    //allowedValues: nationalities,

}

export const blueCard = {
    type: 'BlueCard',
}

export const files = {
    files: {type: ['File'],},

}

export const phones = {
    phones: {type: String,},

}

export const address = {
    fullAddress: {type: String},
    lat: {type: Number,},
    lng: {type: Number,},
    placeId: {type: String},
    unit: {type: String,},
    number: {type: String,},
    street: {type: String,},
    suburb: {type: String,},
    city: {type: String,},
    state: {type: String,},
    zip: {type: String,},
    country: {type: String}
}

