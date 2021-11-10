import React, { useState, useEffect } from 'react'
import { Box, makeStyles, Button, TextareaAutosize } from "@material-ui/core"
import { newComment, getComments } from "./../../service/api.js";
import Comment from "./Comment";

const useStyles = makeStyles({
    component: {
        marginTop: 100,
        display: "flex"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: '50%'
    },
    textarea: {
        width: '100%',
        margin: '0 20px'
    },
    button: {
        height: 40
    }
})

const initialValues = {
    name: '',
    postId: '',
    date: new Date(),
    comments: ''
}

function Comments({ post }) {
    const classes = useStyles();
    const url = 'https://static.thenounproject.com/png/12017-200.png'

    const [comment, setComment] = useState(initialValues);
    const [comments, setComments] = useState([]);
    const [toggle, setToggle] = useState(false);

    const handleChange = (e) => {
        setComment({
            ...comment,
            name: post.username,
            postId: post._id,
            comments: e.target.value
        });
    }

     useEffect(() => {
        const getData = async () => {
            const response = await getComments(post._id);
            setComments(response);
        }
        getData();
    }, [post, toggle]);

    const postComment = async() => {
        await newComment(comment);
        setToggle(prev => !prev);
    }

    return (
        <Box>
            <Box className={classes.component}>
                <img src={url} className={classes.image} alt="dp" />   
                <TextareaAutosize 
                    rowsMin={5} 
                    className={classes.textarea} 
                    placeholder="what's on your mind?"
                    onChange={(e) => handleChange(e)} 
                />
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="medium" 
                    className={classes.button}
                    onClick={() => postComment()}
                >Post</Button>             
            </Box>
            {
                comments && comments.map(comment => {
                    return <Comment setToggle={setToggle} comment={comment}/>
                })
            }
        </Box>
    )
}

export default Comments
