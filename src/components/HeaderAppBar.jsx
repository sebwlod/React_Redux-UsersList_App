import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { makeStyles, createStyles, theme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(3)
    }
}))

const HeaderAppBar = () => {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar display="flex" position="relative">
                <Toolbar>
                    <MenuBookIcon className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>Users List App</Typography>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

export default HeaderAppBar;