import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Search from '../images/search1.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
        width: '105px',
        
        backgroundColor: '#f50057',
        fontSize: '16px',
        color: 'white',
        //border: '2px solid',
        borderRadius: '16px',
        //padding: '8px',
        //boxShadow: '2.5px 5px 5px grey',
        fontFamily: 'Bodoni Moda, serif',
        size:'2rem',
            "&:hover": {
              backgroundColor: '#76A3A5'
            }
    },
  },
}));

export default function ContainedButtons({value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type= 'submit' variant="contained">
          
          <img alt={"search"} src={Search}/>{value}
      </Button>
      
    </div>
  );
}
