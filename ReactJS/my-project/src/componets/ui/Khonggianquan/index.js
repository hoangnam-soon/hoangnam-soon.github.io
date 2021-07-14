import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spacing : {
    width: '100%'
},
      homeTitle : {
        margin: "30px -20px",
        display: "flex",
        justifyContent: "space-around",

        "@media(max-width:768px)":{
          margin: '10px 45px',
          justifyContent: 'space-between',
        },
        "@media(max-width:576px)":{
          margin: '15px',
          justifyContent: 'space-around',
        },
        
      },
      titleLeft : {
        '&:after':{
          content: '""',
          width: '50%',
          height: '4px',
          backgroundColor: '#EA8025',
          display: 'block',
      
          
      },
      fontSize: '40px',
      textTransform: 'uppercase',
      fontFamily: 'Bebas Neue',
      color: 'black',
      width: 'fit-content',
      '@media (max-width : 768px)':{
        fontSize:'30px'

      },
      '@media (max-width : 568px)':{
        fontSize:'20px'
      },




      },
      store : {
        display: "flex",
        justifyContent: "center",
        marginBottom: "60px",
       
      },
      images : {
        width : '100%'
      },





}));

export default function Khonggianquan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} classes={{"spacing-xs-3":classes.spacing}}>
        <Grid item xs={12}>
        <Grid className={classes.homeTitle} item xs={6} >
            <div className={classes.titleLeft}>không gian quán</div>
          </Grid>
          
        </Grid>
        <Grid className={classes.store} item xs={12}>
        <Grid item xs={4} >
            <div ><img className={classes.images} src="https://media-cdn.tripadvisor.com/media/photo-s/19/f4/5c/95/photo2jpg.jpg" alt="" /></div>
          </Grid>
          <Grid  item xs={4} >
            <div ><img className={classes.images}  src="https://hoangnam-soon.github.io/Cat-Cafe/img/Place/about-home-1.jpg" alt="" /></div>
          </Grid>
        </Grid>
        
       
      </Grid>
    </div>
  );
}
