import React from 'react';
import { Typography, Button, Paper, Divider, Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import './Style.css';
import Path from '../Images/Path.png';

import WAN from '../Widgets/WAN';
import LAN from '../Widgets/LAN';
import Intranet from '../Widgets/Intranet';

const useStyles = makeStyles({
    list: {
        width: 300,
    }
});

function Ports({ port }) {
    if (port === 'WAN') {
        return <WAN />
    }
    else if (port === 'LAN') {
        return <LAN />
    }
    else {
        return <Intranet />
    }
}

const PortsContainer = (props) => {

    const classes = useStyles();
    const [state, setState] = React.useState({
        WAN: false,
        LAN: false,
        Intranet: false
    });

    const toggleDrawer = (port, open) => event => {

        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [port]: open });
    };

    const sideList = port => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(port, false)}
            onKeyDown={toggleDrawer(port, false)}
        >
            <Ports port={port} />

        </div>
    );

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <Paper style={{ position: 'relative' }} >
                    <Typography variant="h6" style={{ padding: 25 }}><b>{props.port} Ports</b></Typography>
                    <Hidden smDown>
                        <div style={{ overflowX: 'auto' }}>
                            <table style={{ width: '100%' }} >
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th><Typography variant="button" style={{ color: 'gray' }}>Name</Typography></th>
                                        <th><Typography variant="button" style={{ color: 'gray' }}>Uptime</Typography></th>
                                        <th><Typography variant="button" style={{ color: 'gray' }}>Status</Typography></th>
                                        <th><Typography variant="button" style={{ color: 'gray' }}>IP Address</Typography></th>
                                        <th><Typography variant="button" style={{ color: 'gray' }}>{props.head}</Typography></th>
                                        <th></th>

                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    <tr onClick={toggleDrawer(props.port, true)}>
                                        <td><img src={Path} alt='' /></td>
                                        <td>Ethernet 1</td>
                                        <td>99.88%</td>
                                        <td> <Button style={{ textTransform: 'none', color: 'green' }}>Up</Button></td>
                                        <td>192.168.1.1</td>
                                        <td>{props.data}</td>
                                        <td><Button><i className="fas fa-ellipsis-h"></i></Button></td>

                                    </tr>

                                    <tr onClick={toggleDrawer(props.port, true)} >
                                        <td><img src={Path} alt='' /></td>
                                        <td>Ethernet 2</td>
                                        <td>99.88%</td>
                                        <td><Button style={{ textTransform: 'none', color: 'green' }}>Up</Button></td>
                                        <td>192.168.1.1</td>
                                        <td>{props.data}</td>
                                        <td><Button><i className="fas fa-ellipsis-h"></i></Button></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Hidden>
                    <Hidden mdUp>
                        <Button variant="outlined" color="primary" style={{ margin: 10 }}  onClick={toggleDrawer(props.port, true)}>Open Side Panel</Button>
                    </Hidden>

                    <Divider />
                    <div style={{ padding: 20 }}>
                        <span style={{ color: 'gray' }}>Showing 03 / 03 forwards</span>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <Button color="primary" key={num}>{num}</Button>
                        ))}
                        <Button color="primary">10 per pages<i className="fas fa-caret-down" style={{ margin: 10, fontSize: 15 }}></i></Button>
                    </div>
                </Paper>
            </Grid>
            <Drawer anchor="right" open={state.WAN} onClose={toggleDrawer('WAN', false)}>
                {sideList('WAN')}
            </Drawer>
            <Drawer anchor="right" open={state.LAN} onClose={toggleDrawer('LAN', false)}>
                {sideList('LAN')}
            </Drawer>
            <Drawer anchor="right" open={state.Intranet} onClose={toggleDrawer('Intranet', false)}>
                {sideList('intranet')}
            </Drawer>

        </React.Fragment>

    )
}

export default () => {


    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <PortsContainer port="WAN" head="Connection Type" data="PPoE" />
                <PortsContainer port="LAN" head="LAN Group" data="Default Group" />
                <PortsContainer port="Intranet" head="Action" data={<Button variant="contained" color='secondary'>Disabled</Button>} />
            </Grid>
        </React.Fragment>
    )
}