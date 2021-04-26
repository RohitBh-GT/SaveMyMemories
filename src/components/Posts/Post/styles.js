import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
    Card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: '15px',
        height: '100%',
        position: 'relative'
    },
    CardMedia: {
        height: 0,
        paddingTop: '56.25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundBlendMode: 'darken'
    },
    overlay:{
        position:'absolute',
        top:'10px',
        left:'8px',
        color:'white'
    },
    overlay2:{
        position:'absolute',
        top:'10px',
        right:'3px',
        color:'white'
    },
    tags:{
        margin:'4px',
        color:'blue'
    },
    title:{
       display:'flex',
       justifyContent:'center'
    },
    box:{
        marginTop:'5px'
    },
    bottomOverlay1:{
        bottom:'3px',
        left:'5px',
        color:'blue'
    },
    bottomOverlay2:{
        bottom:'3px',
        right:'-4px',
        color:'red'
    }
}));
export default useStyle;