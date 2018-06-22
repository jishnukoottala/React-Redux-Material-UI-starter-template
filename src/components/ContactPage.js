import React from 'React';

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
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export class ContactPage extends React.Component{

  state={
    messageopen:false,
    messageInfo: {},
  }

giveSuccessMessage=(message)=>{
let newmsg = {
  message,
  key:new Date().getTime()
};

this.setState({
messageopen:true,
messageInfo:newmsg

});

};

onSubmit = ()=>{

  this.giveSuccessMessage('send successfully ');

  //this.props.startAddLogin(user);
  
 // this.props.history.push('/');

};
 handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ messageopen: false });
  };

render(){

   const { message, key } = this.state.messageInfo;


  return (
     <div className="contact-page-wrapper">


<Snackbar
          key={key}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.messageopen}
          autoHideDuration={2000}
          onClose={this.handleClose}
         
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{message}</span>}
          action={[
            
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
             
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
        <Grid container spacing={24} justify="center">
        <Grid item xs={12} md={10} style={{ marginTop: 10 }}>
          <Paper className="contact-page-paper"><Typography variant="display1" gutterBottom   style={{ padding: 15 }}>
      Contact us
      </Typography>
        <Grid container spacing={24} >
        <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
          <TextField
          id="Firstname"
          label="First Name"
          placeholder="First Name"
          className="contact-page-name-list-field"
          margin="normal"
        />
          </Grid>

<Grid item xs={12} lg={6} md={6}  style={{ marginTop: 10 }}>
          <TextField
          id="LastName"
          label="LastName"
          placeholder="Last Name"
          className="contact-page-name-list-field"
          margin="normal"
        />
          </Grid>

          <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
          <TextField
          id="Firstname"
          label="Email"
          placeholder="Email address"
          className="contact-page-name-list-field"
          margin="normal"
        />
          </Grid>


          <Grid item xs={12} lg={6} md={6} style={{ marginTop: 10 }}>
          <TextField
          id="Firstname"
          label="Location"
          placeholder="Location"
          className="contact-page-name-list-field"
          margin="normal"
        />
          </Grid>


<Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
          <TextField
          id="Firstname"
          label="Message"
          multiline
          rows="2"
          placeholder="Message"
          className="contact-page-name-list-field"
          margin="normal"
        />
          </Grid>
<Grid item xs={12} lg={12} md={12} style={{ marginTop: 10 }}>
<Button type="button" color="primary" variant="raised" onClick={this.onSubmit}>Send</Button>
          </Grid>
      
      
        </Grid>
      </Paper>
        </Grid>
        </Grid>
       </div>
  );
}


}




export default ContactPage;
