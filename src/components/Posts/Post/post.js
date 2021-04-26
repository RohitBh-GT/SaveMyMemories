import React, { useEffect } from 'react';
import {Card,CardMedia,Typography,CardContent,CardActions,Button} from '@material-ui/core'
import moment from 'moment';
import useStyle from './styles.js';
import EditIcon from '@material-ui/icons/Edit';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletedPost,likePost } from '../../../actions/post.js';
import { useDispatch } from  'react-redux';

function Post({post,setCurrentId}){
  const classes = useStyle();
  const dispatch = useDispatch();

  useEffect(()=>{
     
  });

    function editCard(){
        setCurrentId(post._id);
    }  
    function handleLikes(){
          dispatch(likePost(post._id));
    }
    function deleteCard(){
           dispatch(deletedPost(post._id));
    }
   
    return (
        <>
         <Card className={classes.Card}>
            <CardMedia className={classes.CardMedia} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{post.creator}</Typography>
              <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2}>
              <Button style={{color:'white'}} size="small" onClick={editCard}>
                <EditIcon />
              </Button>
            </div>
            <div className={classes.tags}>
              <Typography variant="body1">{post.tags.map((tag)=>`#${tag} `)}</Typography>
            </div>
            <div className={classes.box}>
            <Typography className={classes.title} variant="h5" component="h2">{post.title}</Typography>
            <CardContent classes={classes.detail} variant="body2">
               {post.content}
            </CardContent>
            </div>
            <CardActions>
              <Button size="small" className={classes.bottomOverlay1} onClick={handleLikes}><ThumbUpAltIcon /> &nbsp; Likes
               &nbsp; {post.likeCount} &nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
              <Button size="small" className={classes.bottomOverlay2} onClick={deleteCard}><DeleteIcon /> Delete</Button>
            </CardActions>
         </Card>
        </>
    );
}

export default Post;