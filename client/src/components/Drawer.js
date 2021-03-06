import React from 'react';
import {Link} from 'react-router-dom'
import { makeStyles, IconButton, Drawer, List, Divider, ListItem, ListItemText} from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    list: {
        width: 250
    },
    textDecor: {
        textDecoration: "none",
        color: "black"
    }
}))

export default () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        open: false,
    })

    const toggleDrawer = open  => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({open})
    }

    const SideList = ()=> (
        <div className={classes.list} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)} >
            <List>
                <Link className={classes.textDecor} to="/" >
                    <ListItem button key="home">
                        <ListItemText primary="Home" />
                    </ListItem>
                </Link>
                <Link className={classes.textDecor} to="/stringing" >
                    <ListItem button  key="string" >
                        <ListItemText primary="New Stringing Job" />
                    </ListItem>
                </Link>
                <Link className={classes.textDecor} to="/racket_inventory" >
                    <ListItem button key="racket_inventory">
                        <ListItemText primary="Racket Inventory" />
                    </ListItem>
                </Link>
                <Link className={classes.textDecor} to="/rackets" >
                    <ListItem button key="rackets">
                        <ListItemText primary="Rackets" />
                    </ListItem>
                </Link>
            </List>
            <Divider></Divider>
        </div>
    )

    return (
        <React.Fragment>
            <IconButton onClick={toggleDrawer(true)} >
                <MenuIcon/>
            </IconButton>
            <Drawer open={state.open} onClose={toggleDrawer(false)} >
                <SideList/>
            </Drawer>
        </React.Fragment>
    )
}