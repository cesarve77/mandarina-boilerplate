
import { Schema } from 'mandarina';

const definition = {
	text: {
		type: String
	},
	link: {
		type: String,
		validators: ['required']
	}
};

const options = {
	name: 'Link',
};

export const Link = new Schema(definition, options);
