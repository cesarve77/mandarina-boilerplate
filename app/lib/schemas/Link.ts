import { Schema } from 'mandarina';

const definition = {
	text: {
		type: String,
		validators: [
			'required',
			{ minString: 15 }
		],
		permissions: {
			create: 'admin'
		}
	},
	link: {
		type: String,
		validators: [
			'required',
			{ minString: 3 }
		]
	}
};

const options = {
	name: 'Link',
};

export const Link = new Schema(definition, options);
