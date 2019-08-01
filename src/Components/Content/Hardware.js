import React from 'react';
import { Typography, Divider } from '@material-ui/core';
import spike from '../Images/spike.PNG';
import Downloadspeed from '../Images/downloadspeed.png';
import Uploadspeed from '../Images/Uploadspeed.png';
import Cpu from '../Images/cpu.png';
import Memory from '../Images/memory.png';
import Oval from '../Images/Oval.png';

export default () => {

    return (
        <React.Fragment>
            <div style={{ textAlign: 'center', padding: 30 }}>
                <img src={spike} alt="" style={{ margin: 10, height: 'auto' }}></img>
                <h5>OpenWiFi Gateway XS3</h5>
                <img src={Oval} alt="" style={{ marginRight: 5 }} />
                <Typography variant="caption">Online</Typography>
            </div>
            <Divider />
            <div style={{ padding: 30 }}>
                <Typography variant="subtitle2"><b>Hardware details</b></Typography>
                <br />
                <Typography variant="caption">MAC Address</Typography>
                <p>xx:xx:xx:23</p>

                <Typography variant="caption">Device model</Typography>
                <p>ap21D</p>

                <Typography variant="caption">Firmware</Typography>
                <p>v 2.02.2</p>
                <p>
                    <Typography variant="caption" style={{ paddingRight: 25 }}>Uptime</Typography>
                    <Typography variant="caption">Device Health</Typography><br />
                    <Typography variant="caption" style={{ paddingRight: 25 }}><b>99.28%</b></Typography>
                    <Typography variant="caption" style={{ color: 'green' }}><b>Good</b></Typography><br />
                </p>
                <Typography variant="caption">IP Address</Typography>
                <p>176.10.0.10</p>


                <Typography variant="caption">CPU Usage</Typography>
                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}>
                        <img src={Cpu} alt="" />
                    </span>
                    <span>23.4 MBPS</span>
                </div>




                <Typography variant="caption">Memory</Typography>
                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}>
                        <img src={Memory} alt="" />
                    </span>
                    <span>23.4 MBPS</span>
                </div>

                <Typography variant="caption">Clients</Typography>
                <p>H2_921A</p>

                <Typography variant="caption">Added on</Typography>
                <p>13 Jul 2019</p>
            </div>
            <Divider />
            <div style={{ padding: 30 }}>
                <Typography variant="subtitle2"><b>Hardware details</b></Typography>
                <br />
                <Typography variant="caption">Download speed</Typography>
                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}>
                        <img src={Downloadspeed} alt="" />
                    </span>
                    <span>23.4 MBPS</span>
                </div>

                <Typography variant="caption">Upload speed</Typography>

                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}>
                        <img src={Uploadspeed} alt="" />
                    </span>
                    <span>23.4 MBPS</span>
                </div>

            </div>
        </React.Fragment>
    )
}