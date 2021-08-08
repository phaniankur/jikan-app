import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons({value}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button type= 'submit' variant="contained">{value}</Button>
      
    </div>
  );
}