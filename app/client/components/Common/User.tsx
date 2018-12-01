import React from 'react'
import jwtDecode from 'jwt-decode'
import {Query, withApollo, WithApolloClient} from "react-apollo";
import gql from "graphql-tag";
import {logout} from "../Auth/logout";
//import * as Sentry from "@sentry/browser";


const UserContext = React.createContext({});

class UserProviderWithoutApollo extends React.Component<WithApolloClient<any>, { user?: { roles: string[], id: string } }> {
    render() {
        const GET_TOKEN = gql`{token @client}`;
        return (
            <Query query={GET_TOKEN}>
                {({data}) => {
                    const token=data && data.token
                    console.log('loading user',token)
                    return (
                        <UserContext.Provider value={token}>
                            {this.props.children}
                        </UserContext.Provider>
                    )
                }}
            </Query>
        );
    }
}

export const UserProvider = withApollo(UserProviderWithoutApollo)

export const UserConsumer = ({children}) => (
    <UserContext.Consumer>
        {(token)=>{
            let user = token ? jwtDecode(token) : undefined
            if (user && user.exp<=new Date().getTime()/1000) {
                user = undefined
                logout().catch()//Sentry.captureException)
            }
            return children(user)
        }}
    </UserContext.Consumer>

)