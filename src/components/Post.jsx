import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
  
  card: {
    marginBottom: theme.spacing(5),
  },

  media: {
    height: "250px",
    [theme.breakpoints.down("sm")]: {
      height: "150px",
    }
  }
}));

function Post() {
  const classes = useStyles();

  return (
    <>
      <Card className= {classes.card}>
        <CardActionArea>
          <CardMedia 
          className={classes.media} 
          image= "https://images.pexels.com/photos/1722196/pexels-photo-1722196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          title='My Post'
          />
          <CardContent>
            <Typography variant="h5">
              My First Post
            </Typography>
            <Typography gutterBottom variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis sunt id explicabo non ratione quia impedit. Qui, deserunt. Est soluta adipisci ratione id laboriosam eligendi, sunt optio odit voluptate, repellendus, at sed. Accusamus, sunt maiores. Tempora sequi mollitia rem! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis perspiciatis sunt id explicabo non ratione quia impedit. Qui, deserunt. Est soluta adipisci ratione id laboriosam eligendi, sunt optio odit voluptate, repellendus, at sed. Accusamus, sunt maiores. Tempora sequi mollitia rem!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">Share</Button>
          <Button size="small" color="primary">Learn More</Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Post;
