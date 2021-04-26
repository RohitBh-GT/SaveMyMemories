import React,{ useState } from 'react';
import { Container,AppBar,Typography,Button } from '@material-ui/core';
import memories from '../images/memories.jpg';
import useStyles from './styles.js';

function Header(){
    const classes = useStyles();
    const [mouseOver,setMouseOver] = useState(false);

    function hover(){
        setMouseOver(true);
    }

    function hoverOff(){
        setMouseOver(false);
    }

    return (
        <>
          <Container maxWidth="lg">
              <AppBar className={classes.AppBar} position="static" color="secondary">
                  <Typography className={classes.MemoryText} variant="h3" align="center">Memories</Typography>
                  <img className={classes.Image} src={memories} alt="Memories" height="65" width="90" />
                  <Button style={{backgroundColor:mouseOver ? 'purple':''}} onMouseLeave={hoverOff} onMouseOver={hover} className={classes.SignUpButton} size="small">Sign Up</Button>
              </AppBar>
          </Container>  
        </>
    );
}

export default Header;