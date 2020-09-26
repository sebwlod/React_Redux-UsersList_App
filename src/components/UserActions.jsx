import React from 'react';
import { makeStyles, createStyles, theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import AccessibilityIcon from '@material-ui/icons/Accessibility';

import UserCard from './UserCard'

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
      },
    
}))

const UsersActions = ({inputTextValue, setInputTextValue, setSortValue}) => {
    const classes = useStyles()

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={4} container>
                    {/* <Typography>Filter users</Typography> */}
                    <FormControl>
                        <InputLabel htmlFor="input-with-icon-adornment">Filter users</InputLabel>
                        <Input
                            id="input-with-icon-adornment"
                            value={inputTextValue}
                            onChange={event => setInputTextValue(event.target.value)}
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8} contaienr>
                    <Button
                        onClick={() => setSortValue("name")}
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<AccessibilityIcon/>}
                    >
                        Sort by Name
                    </Button>
                    <Button
                        onClick={() => setSortValue("username")}
                        variant="contained"
                        color="default"
                        className={classes.button}
                        startIcon={<AccessibilityIcon/>}
                    >
                        Sort by Username
                    </Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UsersActions