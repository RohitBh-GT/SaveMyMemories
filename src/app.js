import React, { useEffect,useState } from 'react';
import { Grow, Grid, Container } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/post.js';
import Header from './components/Header/header.js';
import Forms from './components/Form/form.js';
import Posts from './components/Posts/posts.js';
import useStyle from './styles.js';

function App() {
    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const classes = useStyle();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);
    
    return (
        <div>
            <Header />
            <Grow in>
                <Container>
                    <Grid className={classes.Grid} container alignItems="stretch" justify="space-between" spacing={4}>
                        <Grid item xs={12} sm={7}>
                           <Posts setCurrentId={setCurrentId} />     
                         </Grid>
                        <Grid item xs={12} sm={4}>
                           <Forms currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </div>
    );
}

export default App;