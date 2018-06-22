import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import HomeIcon from '@material-ui/icons/Home';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LabelIcon from '@material-ui/icons/Label';
import {NavLink} from 'react-router-dom';


class ExpandNav extends React.Component{

state={
    componentsmenuopen:false
};

  handleClick=()=>{
    console.log('clicked');
    this.setState({componentsmenuopen:!this.state.componentsmenuopen});
  };

handleClose = event => {
    if (this.target1.contains(event.target) || this.target2.contains(event.target)) {
      return;
    }

    this.setState({ componentsmenuopen: false });
  };

render(){
    
    return (<List component="nav">
 <ListItem button onClick={this.handleClick}>
            <ListItemIcon className="innernavitem">
              <LabelIcon />
            </ListItemIcon>
            <ListItemText inset primary="Components" />
            {this.state.componentsmenuopen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={this.state.componentsmenuopen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <NavLink to="/forms"  className="NavLinkItem"><ListItem button >
                <ListItemIcon className="innernavitem">
                  <StarBorder />
                </ListItemIcon>
                <ListItemText inset primary="Forms" />
              </ListItem>
              </NavLink>
            </List>
          </Collapse>
           </List>); 
}

}


export default ExpandNav;

