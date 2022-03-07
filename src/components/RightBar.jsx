import React from "react";
import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
    position: "sticky",
    top: 0,
  },

  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
  },

  link: {
    marginRight: theme.spacing(2),
    color: "#555",
    fontSize: 16,
  }
}));

function RightBar() {
  const classes = useStyles();

  return (
    <>
      <Container className={classes.container}>
        <Typography className={classes.title} gutterBottom>
          Online Friends
        </Typography>
        <AvatarGroup total={6} style= {{ marginBottom: 20 }}>
          <Avatar alt="Karan Kundrra" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOpv9PIer1cbi209yaz1XRGzG-sHHFecuY-w&usqp=CAU" />
          <Avatar alt="Kartik Aryan" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH-f6T96HH4J9WkXTZxyiu_Y1YMNMWlnH2bA&usqp=CAU" />
          <Avatar alt="Nushrat Bharucha" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR3las7mvfe7jCvHk1tQWTi-FMdvJasFHpsg&usqp=CAU" />
          <Avatar alt="Munnawar Faruki" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZUWcNItb_AlhQLlnX3ndcHv9Pd4zDMrL8hA&usqp=CAU" />
          <Avatar alt="Divya Agrawal" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Rxzqdq1SOYiZjq9om6NTEHPfeWC6Tv-XOg&usqp=CAU" />
          <Avatar alt="Kriti Senon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsU5W5g-SF_BTn06DWsulwfvg2zRwcpuFkKg&usqp=CAU" />
        </AvatarGroup>

        <Typography className={classes.title} gutterBottom>
          Gallery
        </Typography>
          <ImageList rowHeight={85} style= {{ marginBottom: 20 }} cols={3}>
              <ImageListItem>
                <img src= "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/1037996/pexels-photo-1037996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/5722994/pexels-photo-5722994.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/6913721/pexels-photo-6913721.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/669502/pexels-photo-669502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.pexels.com/photos/2872747/pexels-photo-2872747.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"  alt= ""
                />
              </ImageListItem>
              <ImageListItem>
                <img src= "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format"  alt= ""
                />
              </ImageListItem>
          </ImageList>

          <Typography className={classes.title} gutterBottom>
            Categories
          </Typography>
          <Link href="#" className= {classes.link} variant= "`body2`">
            Sports
          </Link>
          <Link href="#" className= {classes.link} variant= "`body2`">
            Food
          </Link>
          <Link href="#" className= {classes.link} variant= "`body2`">
            Movies
          </Link>
          <Divider flexItem style={ { marginBottom: 10 } } />
          <Link href="#" className= {classes.link} variant= "`body2`">
            Music
          </Link>
          <Link href="#" className= {classes.link} variant= "`body2`">
            Science
          </Link>
          <Link href="#" className= {classes.link} variant= "`body2`">
            Nature
          </Link>
          <Divider flexItem style={ { marginBottom: 10 } } />
          <Link href="#" className= {classes.link} variant= "`body2`">
            Travel
          </Link>
      </Container>
    </>
  );
}

export default RightBar;
