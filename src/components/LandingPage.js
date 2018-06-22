import React from 'react';
import Header from './Header';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import bulb from '../assets/img/bulb1.png';
import {Link} from 'react-router-dom';


const LandingPage = () => (
  <div className="landingPagebodyComponent">

<br/>
<Typography variant="display3" gutterBottom align="center">
        Welcome to Rect Company
      </Typography>
    
   <Grid container spacing={24} >
        <Grid item xs={12} md={12}>
          <Typography variant="body2" gutterBottom align="center">
        Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy
      </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom align="left" style={{paddingLeft:20}}>
        {`
         There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet
        `}
        <Link to="/start"> <Button color="primary"  align="left" style={{marginLeft:20}}>
        Get Started
      </Button></Link>

       <Button color="primary"  align="left" style={{marginLeft:20}}>
        Know More
      </Button>
      </Typography>
        </Grid>
         <Grid item xs={6}>
          <Image
        src={bulb}
      color="inherit" style={{height:40}} imageStyle={{ width: '50', height: '50' }} />
        </Grid>
        <Grid item xs={12}>
         
        </Grid>
       {/* <Grid item xs={6}>
          <Paper >xs=6</Paper>
        </Grid>*/}
        </Grid>

     <Grid container spacing={24} >
        <Grid item xs={12} md={12}>

          </Grid>
          </Grid>

  </div>
);

export default LandingPage;