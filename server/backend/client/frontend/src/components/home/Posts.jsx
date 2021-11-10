import React, { useState, useEffect } from 'react'
import Post from "./Post.jsx"
import { makeStyles, Grid } from "@material-ui/core"
import { Link, useLocation } from "react-router-dom"
import { getAllPosts } from "./../../service/api.js"

function Posts() {
    const [posts, setPosts] = useState([]);
    const { search } = useLocation();

    useEffect(() => {
        const fetchData = async() => {
            let data = await getAllPosts(search);
            console.log(data);
            setPosts(data);
        }
        fetchData();
    }, [search])

    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <Grid item lg={3} sm={4} xs={12}>
                            <Link to={`/details/${post._id}` }style={{textDecoration: 'none', color: 'inherit'}}>
                                <Post post={post}/>
                            </Link>
                        </Grid>
                    )
                })
            }
        </>
    )
}

export default Posts
