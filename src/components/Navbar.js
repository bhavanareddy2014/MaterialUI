import React from 'react'
import {AppBar,Typography,Toolbar,Button} from "@material-ui/core";
import {Link} from "react-router-dom";
function Navbar(){
    return (
        <AppBar position="static">
        <Toolbar>
        <Typography variant ="h4" style ={{flexGrow: "1"}}>
        Material UI
        </Typography>
        <Button color="inherit" component ={Link} to = "/"> Posts</Button>
        <Button color ="inherit" component ={Link} to ="/albums">Albums</Button>
        <Button color ="inherit" component ={Link} to ="/users">Users</Button>
        </Toolbar>
        </AppBar>
    )
}

export default Navbar
