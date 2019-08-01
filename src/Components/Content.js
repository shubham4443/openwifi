import React, { Fragment } from 'react';
import { withStyles, Grid, Paper, Typography } from '@material-ui/core';
import Hardware from './Content/Hardware';
import Ports from './Content/Ports';

const styles = theme => ({
    Paper: {

        overflowY: 'auto'
    }
})

export default withStyles(styles)(class extends React.Component {

  render(){
      const {classes} = this.props;
    return (
        <Fragment>
                <Typography variant="subtitle1">{"< Hardware"}</Typography>
               <h4 style={{ padding: '25px 0px' }}>Gateway configuration</h4>
            <Grid container spacing={3}>
                <Grid item  sm={12} md={3} >
                    <Paper className={classes.Paper}>
                        <Hardware />
                    </Paper>
                </Grid>
                <Grid item  sm={12} md={9}>
                  
                        <Ports />
                    
                </Grid>
            </Grid> 
        </Fragment>
    )
  }
})