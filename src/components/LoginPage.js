import React from 'React';
import { connect } from 'react-redux';
import {login} from '../store/actions/auth';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Key from '@material-ui/icons/VpnKey';
import Button from '@material-ui/core/Button';

export class LoginPage extends React.Component{

OnClickLogin = ()=>{


  this.props.startLogin('1284565ertr');
  
  this.props.history.push('/home');

};

render(){
  return (
    <div className="login-page-class">
  


      <Paper className="loginPaper">
          <div className="loginheaderpart">
               <Typography variant="display3" gutterBottom className="loginpageheader">
        Login
      </Typography>
              </div>
        <Typography variant="headline" component="h3">
          Login to your account
        </Typography>
        <form>
    <div className="loginformgroup">
       
            <AccountCircle />
         
            <TextField id="input-username" label="Username" />
         
        </div>
        <div className="loginformgroup">


          
            <Key />
          
            <TextField type="password" id="input-password" label="Password" />
         
        </div>
        </form>

        <Button  variant="raised" color="primary" onClick={this.OnClickLogin}><Typography variant="button" gutterBottom className="logintypography">
        Login
      </Typography></Button>
      </Paper>
  </div>
  );
}


}




const mapDispatchToProps = (dispatch)=>({
  startLogin: (userid)=> dispatch(login(userid))
});


export default connect(undefined,mapDispatchToProps)(LoginPage);