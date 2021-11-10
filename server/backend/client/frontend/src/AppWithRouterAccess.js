import React from 'react'
import Header from "./components/Header"
import Home from "./components/home/Home"
import { Box } from "@material-ui/core"
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import DetailView from "./components/post/DetailView"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 
import CreateView from "./components/post/CreateView"
import UpdateView from "./components/post/UpdateView"
import { useHistory } from "react-router-dom";
import Login from "./components/account/Login";
import { oktaAuthConfig, oktaSignInConfig } from './config';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {

    const history = useHistory();

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    const customAuthHandler = () => {
        history.push('/login');
    };
    return (
        <>
            <Security
                oktaAuth={oktaAuth}
                onAuthRequired={customAuthHandler}
                restoreOriginalUri={restoreOriginalUri}
            >
                <SecureRoute path="/" component={Header}/>
                <Box style={{marginTop: 64}}>
                    <Switch>
                        <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                        <Route path='/login/callback' component={LoginCallback} />
                        <Route path="/details/:id" render={ ({match}) => <DetailView id={match.params.id}/> } />
                        <Route path="/create">
                            <CreateView/>
                        </Route>
                        <Route path="/update/:id" render={ ({match}) => <UpdateView id={match.params.id}/>} />
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </Box>
            </Security>
        </>
    )
}

export default AppWithRouterAccess
