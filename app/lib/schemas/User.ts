import { Schema } from "mandarina";
import { nobody } from "../types/permissions";

const definition = {
	firstName: {
		type: String,
		validators: ['required']
	},
	surname: {
		label: 'Last name',
		type: String
	},
	email: {
		type: String,
		unique: true,
		validators: ['required', 'isEmail'],
		/* SEVER-START */
		permissions: { read: 'admin' },
		/* SEVER-END */
	},
	hash: {
		type: String,
		/* SEVER-START */
		permissions: nobody
		/* SEVER-END */
	},
	roles: {
		type: [String],
		/* SEVER-START */
		permissions: nobody
		/* SEVER-END */
	}
};

const options = {
	name: 'Users'
};

export const User = new Schema(definition, options);
