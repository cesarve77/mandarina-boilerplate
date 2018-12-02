import {Table} from "mandarina";
//import {privateKey} from "../security/private-key";
import {Context} from "../../server/server";
import {sendEmail} from "../../server/email/send";
import {getUser} from "../../server/startup";

export const SendEmailChangePassword = new Table({
}, {
    name: 'SendEmailChangePassword',
    errorFromServerMapper: (field, error) => {
        if (field === 'token' && error && error.message && error.message === 'GraphQL error: jwt expired') return 'Token Expired'
        return
    },
    virtual: true,
    resolvers: {
        sendEmailChangePassword: {
            resolver: async (_: any, __, context: Context, info: any) => {
                /* SERVER-START */
                const user=await getUser(context,'{id,firstName,surname}')
                return !!user && await sendEmail({User:user},'changePassword')
                /* SERVER-END */
            },
            type: "mutation",
            result: "boolean",
        }
    },
})
