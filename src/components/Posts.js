import React,{useEffect} from 'react'
import { Box,Typography} from '@material-ui/core';
import {useSelector,useDispatch} from 'react-redux';
import {getPostData} from "../Store/Actions/posts";
import Grid from'@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
function Posts() {
  const posts = useSelector(state => state.posts.postData)
  const dispatch = useDispatch();
  useEffect(()=>{
 dispatch(getPostData())
  },[])
  //console.log(posts);
   const postList = posts.length ? (
    posts.map(post =>{
        return (
            <div className="post card" key ={post.id}>
            <div className="card-content">
            <Grid container spacing={4}>
            <Grid item xs={6}>
            <Paper>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </Paper>
            </Grid>
            <Grid item xs={6}>
            <Paper>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </Paper>
            </Grid>
            
           
            </Grid>
            </div>
            </div>)
    })
    ) : (<div> No posts yet</div>)
    return (
      <Box py={5} textAlign="center">
      <Typography variant ="h3">
      Posts page !
      </Typography>
      <div>
     {postList}
      </div>
      </Box>
      
    )
}
// function mapStateToProps(state){
//   return {
//     posts:state.posts
//   };
// }
export default  Posts;
