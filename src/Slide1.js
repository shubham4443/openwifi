import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';

import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { Button } from '@material-ui/core';
import image from './Components/Images/avatar.png';
import Content from './Components/Content';
import OpenWiFi from './Components/Images/OpenWiFi.png';

const AppBarWidget = (props) => {
    return (

        <Fragment>
            <i className={props.icon} style={{ padding: '20px', color: props.color }}></i>
            <div style={{ padding: '10px 0' }}>
                <Typography variant="caption">{props.title}</Typography>
                <Typography variant="subtitle2">{props.text}</Typography>
            </div>
            <Button><i className="fas fa-caret-down" style={{ fontSize: 20, padding: 20 }}></i></Button>
        </Fragment>
    )
}
const drawerWidth = 80;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

const menuIcons = [
    "fas fa-th-large",
    "fas fa-desktop",
    "fas fa-briefcase",
    "fas fa-user",
    "far fa-id-card",
    "fas fa-wifi",
    "fas fa-cog"
]

function ResponsiveDrawer(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

 

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {menuIcons.map((value, index) => (
                    <ListItem key={index} button>
                        <i className={value} style={{ fontSize: 25, padding: 10 }}></i>
                    </ListItem>
                ))}
            </List>
        </div>
    );

 
    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" color="default" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ flexGrow: 1 }}>
                        <img src={OpenWiFi} alt="" />
                        <Button><i className="fas fa-caret-down" style={{ fontSize: 20, padding: 20 }}></i></Button>
                    </div>
                    <Hidden smDown>
                        <div className="appbar-widgets" style={{ display: 'flex', flexDirection: 'row' }}>
                            <AppBarWidget icon="fas fa-wifi" title="System status" text="Healthy" color="green" />
                            <AppBarWidget icon="fas fa-dollar-sign" title="Today's spends" text="$42.20" color="orange" />
                            <AppBarWidget icon="fas fa-map-marker-alt" title="Location" text="Coffee Hut - Gachibowli" color="blue" />
                            <Button><i className="far fa-bell" style={{ fontSize: 20, padding: 20 }}></i></Button>
                            <img alt="Remy Sharp" src={image} style={{ padding: 20 }} />
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Button><i className="fas fa-ellipsis-v" style={{ fontSize: 20 }}></i></Button>
                    </Hidden>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true,
                        }}
                    >           
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Content />
            </main>
        </div>
    );
}

ResponsiveDrawer.propTypes = {
    container: PropTypes.object,
};

export default ResponsiveDrawer;
