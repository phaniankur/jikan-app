import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    marginTop: '0.5rem',
    //background: 'red',
    maxWidth: 280,
    height: 500,
    display: 'block',
    flexDirection: 'row',
    borderRadius: '12px',
    margin: '.5rem',
    marginBottom: '2rem'
  },
  media: {
    height: 400,
    width: 300,
    
  },

  title:{
    display: 'flex',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '16px',
  }
});

export default function MediaCard({url,image_url, title}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardActionArea href={url}>
        <CardMedia
          className={classes.media}
          component="img"
            alt="Contemplative Reptile"
            
            src={image_url}
            title={title}
        />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" component="h2" >
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}
