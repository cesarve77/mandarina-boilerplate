import { Table } from 'mandarina'
import { User as UserSchema } from '../schemas/User';

const options = {
    name: 'User',
    permissions: {
        filter: ({ userId, roles }) => {
            if (roles.includes('admin')) {
                return
            }
            return { id: userId }
        }
    }
};

export const User = new Table(UserSchema, options);
