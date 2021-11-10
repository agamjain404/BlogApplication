import React from 'react'
import { AppBar, Toolbar, makeStyles, Typography } from "@material-ui/core"
import { Link, useHistory } from "react-router-dom";
import { useOktaAuth } from '@okta/okta-react';

const useStyles = makeStyles({
    component:{
        background: '#FFFFFF',
        color: "black"
    },
    container:{
        justifyContent: 'center',
        '& > *': {
            padding: 20
        }
    },
    link: {
        textDecoration : "none",
        color: "inherit",
        cursor: "pointer"
    }
})

function Header() {
    const classes = useStyles();
    const history = useHistory();

    const { oktaAuth, authState } = useOktaAuth();

    if(authState && authState.isPending) return null;

    const login = async() => history.push('/login');

    const logout = async() => oktaAuth.signOut();

    const button = authState.isAuthenticated ?
    <button onClick={logout}
        style={{
            background: 'unset',
            border: "none",
            textTransform: 'uppercase',
            fontFamily: 'Roboto',
            fontSize: 17,
            cursor: "pointer",
            opacity: "0.8"
        }}
    >Logout</button> :
    <button onClick={login}>Login</button>;

    return (
        <div>
            <AppBar className={classes.component}>
                <Toolbar className={classes.container}>
                    <Typography><Link to="/" className={classes.link}>HOME</Link></Typography>
                    <Typography>ABOUT</Typography>
                    <Typography>CONTACT</Typography>
                    <Typography>{button}</Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
