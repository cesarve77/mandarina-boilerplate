import { Table } from 'mandarina'
import { User as UserSchema } from '../schemas/User';
import { LoginRequiredPolicy, AdminRequiredPolicy } from '../policies';


const options = {
    name: 'User',
    // You can apply authorization policies using middlewares like an express implementation
    middlewares: [
        LoginRequiredPolicy,
        AdminRequiredPolicy
    ]
};

export const User = new Table(UserSchema, options);








