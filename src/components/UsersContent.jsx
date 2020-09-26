import React from 'react';
import { makeStyles, createStyles, theme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import UserCard from './UserCard'

const useStyles = makeStyles(theme => ({
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      }
}))

const UsersContent = ({sortedUsersList}) => {

    const classes = useStyles()
    // <Container className={classes.cardGrid} maxWidth="md">
    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                <UserCard sortedUsersList={sortedUsersList}/>
            </Grid>
        </Container>
    )
}

export default UsersContent