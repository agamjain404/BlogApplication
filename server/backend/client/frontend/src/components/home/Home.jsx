import React from 'react'
import Banner from "./Banner.jsx"
import Categories from "./Categories.jsx"
import Posts from "./Posts.jsx"

import { makeStyles, Box, Grid } from "@material-ui/core"


function Home() {
    return (
        <>
          <Banner/>  
          <Grid container>
            <Grid item lg={2} xs={12}>
                <Categories/>
            </Grid>
            <Grid container item lg={10} xs={12}>
                <Posts/>
            </Grid>
          </Grid>
        </>
    )
}

export default Home
