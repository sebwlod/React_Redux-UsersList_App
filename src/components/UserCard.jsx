import React from 'react';
import { makeStyles, createStyles, theme} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '56.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
}))

const UsersCard = ({sortedUsersList}) => {
    const classes = useStyles()
    const mappedUsersList = sortedUsersList.map(user => {
        return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia 
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                />
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {user.name}
                    </Typography>
                    <Typography color="textSecondary">
                        Username: {user.username}
                    </Typography>
                    <Typography color="textSecondary">
                        Phone: {user.phone}
                    </Typography>
                    <Typography color="textSecondary">
                        Website: {user.website}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link
                        to={{
                            pathname: `/user-details/${user.id}`,
                            state: {
                                currentUser: {user}
                            }
                        }}
                    >
                        <Button size="small" color="primary">
                            Details
                        </Button>
                    </Link>
                    <Button size="small" color="primary">
                        View albums
                    </Button>                
                </CardActions>
            </Card>
        </Grid>
        )
    })
    // const mappedUsersData = usersData.map(item => {
    //     return (<div>lol</div>)
    // })
    return (
        <React.Fragment>
            {mappedUsersList}
        </React.Fragment>
        //<div>lol</div>
        // <Grid item xs={12} sm={6} md={4}>
        //     <Card className={classes.card}>
        //         <CardMedia 
        //             className={classes.cardMedia}
        //             image="https://source.unsplash.com/random"
        //         />
        //         <CardContent className={classes.cardContent}>
        //             <Typography gutterBottom variant="h5" component="h2">
        //                 Sebastian Włodarczyk
        //             </Typography>
        //             <Typography color="textSecondary">
        //                 Email: email.@email.com
        //             </Typography>
        //             <Typography color="textSecondary">
        //                 Phone: 382 182 812
        //             </Typography>
        //             <Typography color="textSecondary">
        //                 Website: hildegard.org
        //             </Typography>
        //         </CardContent>
        //         <CardActions>
        //             <Button size="small" color="primary">
        //                 Details
        //             </Button>
        //             <Button size="small" color="primary">
        //                 View albums
        //             </Button>                
        //         </CardActions>
        //     </Card>
        // </Grid>
    )
}

export default UsersCard