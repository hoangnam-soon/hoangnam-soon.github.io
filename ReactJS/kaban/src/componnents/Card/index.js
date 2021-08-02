import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import style from './style';
import {SortableHandle} from 'react-sortable-hoc';


const useStyles = makeStyles(style);


export default function SimpleCard({item,onDelete}) {
  const classes = useStyles();
   const Dag = SortableHandle(()=>{
       return (
    <CardContent>
    <Typography className={classes.title} color="textSecondary" gutterBottom>
    {item.date}
    </Typography>
    <Typography variant="h5" component="h2">
      {item.title}
    </Typography>
    <Typography className={classes.pos} color="textSecondary">
      {item.discription}
    </Typography>
    <Typography variant="body2" component="p">
      well meaning and kindly.
      <br />
      {'"a benevolent smile"'}
    </Typography>
  </CardContent>)
   })
//   const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <div onClick={()=>onDelete(item)}>X</div>
      <Dag/>
      <CardActions>
        <Button size="small" >Lear more</Button>
      </CardActions>
    </Card>
  );
}
