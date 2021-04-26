import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    Paper:{
        padding:'20px',
        border:'2px solid lightgrey',
        backgroundColor: "#fff",
        backgroundImage: "url(https://www.transparenttextures.com/patterns/brushed-alum-dark.png)"
    },
    Heading:{
        margin:'2px',
        fontWeight:'400'
    },
    TextField:{
        margin:'4px',
        fontWeight:'400'
    },
    FileBase:{
       marginTop:'6px',
       marginBottom:'4px',
       marginLeft:'4px'
    },
    Button:{
        margin:'4px'
    }
}));

export default useStyle;