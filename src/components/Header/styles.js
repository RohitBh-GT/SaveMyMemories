import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme)=>({
    AppBar:{
       borderRadius:15,
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       justifyContent:'center'
    },
    MemoryText:{
        color:'yellow',
        fontWeight:'200'
    },
    Image:{
        marginLeft:'12px'
    },
    SignUpButton:{
        backgroundColor: '#206bcc',
        color:'white',
        marginLeft:'6rem',
        fontWeight:'bold'
    }
}));
export default useStyle;