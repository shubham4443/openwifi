import React from 'react';
import { Divider, Typography, Button } from '@material-ui/core';
import Path2 from '../Images/Path 2.png';
import Transpeed from '../Images/downloadspeed.png';
import Uploadspeed from '../Images/Uploadspeed.png';

export default () => {
    return (
        <div style={{marginRight: 10}}>
            <div style={{ display: 'flex' }}>
                <span style={{ flexGrow: 1, padding: 20, fontSize: 16 }}>Intranet Port</span>
                <Button><i className="fas fa-times" style={{ color: 'gray', padding: 20, fontSize: 20 }}></i></Button>
            </div>
            <Divider />
            <div style={{ display: 'flex' }}>
                <div>
                    <img src={Path2} alt="" style={{ padding: 10, margin: '32px 12px', border: '1px solid #3768C4', boxSizing: 'border-box', borderRadius: 4 }} />
                </div>
                <div style={{ margin: '32px 8px' }}>
                    <Typography variant="h6">Port name</Typography>
                    <Typography variant="caption" style={{ color: 'gray' }}>Assigned on 21st March 2018</Typography>
                </div>
                <i className="fas fa-circle" style={{ color: 'green', fontSize: 10, paddingTop: 50, paddingBottom: 50, paddingLeft: 57 }}></i>
            </div>
            <Divider />
            <div style={{ margin: 12 }}>
                <Typography variant="caption">Status</Typography>
                <p>Up</p>

                <p>
                    <Typography variant="caption" style={{ paddingRight: 25 }}>Uptime</Typography>
                    <Typography variant="caption">Health</Typography><br />
                    <Typography variant="caption" style={{ paddingRight: 25 }}><b>99.28%</b></Typography>
                    <Typography variant="caption" style={{ color: 'green' }}><b>Good</b></Typography><br />
                </p>

                <br />
                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}><b>Data Transfer</b></span>
                    <Button variant="text" color="primary">Refresh</Button>
                </div>
                <Typography variant="caption">Transfer Up</Typography>
                <p>12.4 GB</p>
                <Typography variant="caption">Transfer Down</Typography>
                <p>12.31</p>
                <Typography variant="caption">Tran speed</Typography>
                <div style={{ display: 'flex' }}>
                    <span style={{ flexGrow: 1 }}>
                        <img src={Transpeed} alt="" />
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
                <br /><br />
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <Button variant="outlined" color="primary">Enable Port</Button>
                </div>
            </div>
        </div>
    )
}