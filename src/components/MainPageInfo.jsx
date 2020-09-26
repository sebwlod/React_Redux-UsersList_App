import React from 'react';
import { makeStyles, createStyles, theme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    mainPageInfoContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    }
}))

const MainPageInfo = () => {
    const classes = useStyles()

    return (
        <div className={classes.mainPageInfoContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Users List App
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Application built using React + Redux. Collection bellow shows specific users and their details
                like personal information or albums.
                {/* Something short and leading about the collection below—its contents, the creator, etc.
                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                entirely. */}
                </Typography>
            </Container>
        </div>
    )
}

export default MainPageInfo
