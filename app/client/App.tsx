import React, {PureComponent} from "react";
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import {ApolloLink} from 'apollo-link';
import fetch from 'unfetch' //todo remove for production
import {BrowserRouter as Router} from "react-router-dom"
import {Divider, Layout, message} from "antd";
import {withClientState} from 'apollo-link-state';
import {ApolloProvider} from "react-apollo";
import {setContext} from 'apollo-link-context';
import {CreateForm, List} from "mandarina-antd";
import {Link as LinkSchema} from "../lib/schemas/Link";


message.config({
    duration: 3.5,
});
const {Header, Footer, Content} = Layout;

let token = localStorage.getItem('mandarina__AuthToken')
if (token) sessionStorage.setItem('mandarina__AuthToken', token)
token = null

const cache = new InMemoryCache()
const stateLink = withClientState({
    cache,
    defaults: {
        token: sessionStorage.getItem('mandarina__AuthToken')
    },
    resolvers: {}
});

const authLink = setContext((_, {headers}) => {
    // get the authentication token from local storage if it exists
    const token = sessionStorage.getItem('mandarina__AuthToken')
    console.log('authLink', token)
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

const httpLink = new HttpLink({
    fetch,
    uri: 'http://localhost:8000',
    credentials: 'same-origin'
})

export const client = new ApolloClient({
    link: ApolloLink.from([authLink, stateLink, httpLink,]),
    cache,
});

// @ts-ignore
client.onResetStore(() => {
    stateLink.writeDefaults()
});


class App extends PureComponent {

    render() {

        return (
            <ApolloProvider client={client}>
                    <Router>
                        <Layout>
                            <div>
                                <Header>
                                   <h1  style={{color: '#fff'}}>Mandarina</h1>
                                </Header>
                                <Content
                                    style={{padding: '50px', background: '#fff', minHeight: 'calc(100vh - 133px)'}}>
                                    <h2>New Link</h2>
                                    <ActionForm table={LinkSchema} actionName='create' onSubmitSuccess={()=>message.success('Link Added')}/>
                                    <br/>
                                    <Divider/>
                                    <h2>Links List</h2>
                                    <List schema={LinkSchema} fields={['link', 'text']}/>
                                </Content>
                                <Footer>
                                    © {new Date().getFullYear()}
                                </Footer>
                            </div>
                        </Layout>
                    </Router>
            </ApolloProvider>
        )
    }
}


export default App
