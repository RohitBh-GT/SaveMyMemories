import React, { useState,useEffect } from 'react';
import { Typography,Paper,TextField,Button } from '@material-ui/core';
import useStyle from './styles.js';
import { useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPosts,updatePost } from '../../actions/post.js';
import { useDispatch } from 'react-redux';

function Form({currentId,setCurrentId}){

    const [postData,setPost] = useState({
      creator:'',
      title:'',
      content:'',
      tags:'',
      selectedFile:''
    });

    const classes = useStyle();
    const dispatch = useDispatch();
    const post = useSelector((state)=> currentId ? state.posts.find((p)=> p._id===currentId ) : null )

    useEffect(()=>{
       if(post) setPost(post);
    },[post]); 

    function handleSubmit(event){
        event.preventDefault();
        if(currentId){
          dispatch(updatePost(currentId,postData));
        }
        else
          dispatch(createPosts(postData));

        clear();
    }

    function makeChange(event){
        var {name,value} = event.target;
        setPost((prevValue)=>{
          return {
            ...prevValue,
            [name]:value
          };
        });
        event.preventDefault();
    }

    function clear(){
      setCurrentId(null);
         setPost({
          creator:'',
          title:'',
          content:'',
          tags:'',
          selectedFile:''
        });
    }

    return (
        <>
          <Paper className={classes.Paper}>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
               <Typography className={classes.Heading} variant="h5" color="textPrimary" align="center">
                  { currentId ? 'Editing':'Creating'} your Memory
               </Typography>
               <TextField className={classes.TextField} color="primary" name="creator" fullWidth label="Creator" value={postData.creator} onChange={makeChange} variant="outlined"  />
               <TextField className={classes.TextField} name="title" fullWidth label="Title" value={postData.title} onChange={makeChange} variant="outlined"  />
               <TextField className={classes.TextField} name="content" rows="4" fullWidth label="Message" value={postData.content} onChange={makeChange} variant="outlined"  />
               <TextField className={classes.TextField} name="tags" fullWidth label="Tags" value={postData.tags} onChange={(e) => setPost({ ...postData, tags: e.target.value.split(',') })} variant="outlined"  />
               <div className={classes.FileBase}>
               <FileBase type="file" multiple={false} value={postData.selectedFile} onDone={ ({base64}) => setPost({...postData,selectedFile:base64}) } />
               </div>
               <Button className={classes.Button} type="submit" variant="contained" fullWidth name="submit" color="primary" >Submit</Button>
               <Button className={classes.Button} variant="contained" fullWidth onClick={clear} color="secondary" >Clear</Button>
            </form>
          </Paper>
        </>
    );
}
export default Form;