import { Table } from 'mandarina';
import { Link as LinkSchema } from '../schemas/Link';
//import { LoginRequiredPolicy } from '../policies';

const options = {
    name: 'Link',
    // You can apply authorization policies using middlewares like an express implementation
    middlewares: [
        LoginRequiredPolicy,
    ],

    hooks:{

        beforeValidate: (action, _, args, context, info) => {
            // You can prepare default data or process some fields before validation
            // args.data.password = encrypt(args.data.password)
        },

        validationFailed: (action, _, args, context, info) => {
            // You can manage what you want to do with the validation errors,
            // accessing them through context.errors variable
            const message = context.errors.map(e => e.message).join(', ');
            throw new Error(message);
        },

        beforeCreate: (action, _, args, context, info) => {
            // You can break the request cycle throwing an exception
            // throw new Error('Prevent creation');
        }
    }
};

export const Link = new Table(LinkSchema, options);
