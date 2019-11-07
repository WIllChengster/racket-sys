import React from 'react';
import {  Grid, FormControl, InputLabel, Input, makeStyles, Button } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
	formControl: {
		margin: theme.spacing(1)
    },
    button: {
        margin: theme.spacing(1),
        
    }
}))

export default function Restring() {
    const classes = useStyles()

    return(
        <React.Fragment>
            <Grid>
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="r-name" >Racket Name</InputLabel>
                    <Input id="r-name" />
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="s-name">String Name</InputLabel>
                    <Input id="s-name"/>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="s-tension">Tension (lb)</InputLabel>
                    <Input id="s-tension"/>
                </FormControl>


            </Grid>
            <Grid>
                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust-fname" >Customer First Name</InputLabel>
                    <Input id="cust-fname"/>
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust-lname">Customer Last Name</InputLabel>
                    <Input id="cust-lname"/>
                </FormControl>

                <FormControl className={classes.formControl} >
                    <InputLabel htmlFor="cust-phone">Customer Phone</InputLabel>
                    <Input id="cust-phone"/>
                </FormControl>
            </Grid>
            <Grid container justify="center" >
                <Grid item>
                    <Button className={classes.button} variant="contained" >Next</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

// export default restring