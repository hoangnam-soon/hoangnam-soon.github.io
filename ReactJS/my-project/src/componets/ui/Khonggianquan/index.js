import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


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

spacing : {
  width : '100%',
  margin : 'auto',

},
images : {
 width : '100%'
 
},
 wrapTitle : {
  padding: '30px 25px !important',
  alignItems: 'center',
  margin: 'auto',
  display: 'inline-flex',
  justifyContent: 'space-between',
  "@media(max-width:768px)":{
    padding: '25px',
    
  },
  // "@media(max-width:1200px)":{
  // padding : '25px 20px'
  // },
  
},
titleLeft : {
  '&:after':{
    content: '""',
    width: '50%',
    height: '4px',
    backgroundColor: 'black',
    display: 'block',
 
    
},
fontSize: '40px',
textTransform: 'uppercase',
fontFamily: 'Bebas Neue',
color: '#EA8025',
width: 'fit-content',
// '@media (max-width : 768px)':{
//   fontSize:'30px'

// },
// '@media (max-width : 568px)':{
//   fontSize:'20px'
// }



},

allButton : {
  '&:hover':{
    backgroundPosition: 'left',
    color : 'white',

  },
  display: 'inline-block',
  padding: '8px 15px',
  border: '1px solid #666666',
  color: 'black',
  borderRadius: '3px',
  background: 'linear-gradient(to left, #EA8025 50%, #000 50%) right',
  backgroundSize: '200%',
  transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
  // '@media (max-width : 768px)':{
  //   fontSize:'14px',
  //   padding: '5px 10px',

  // },
  // '@media (max-width : 576px)':{
  //   fontSize:'10px',
  //   padding: '3px 7px',
  // }
},
wrapimages : {
  display:'flex',
  margin : 'auto',
  justifyContent: 'center',
  '@media (max-width : 768px)':{
      display : 'gird'
  
    },
}





}));

export default function Khonggianquan() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} classes={{"spacing-xs-3":classes.spacing}}>
        <Grid classes={{'root':classes.wrapTitle}} item lg={8} xs={12}>
            <div className={classes.titleLeft}>không gian quán</div>
            <div ><Link className={classes.allButton} to='/Store' >xem thêm</Link></div>
        </Grid>

        


        <Grid className={classes.store} item xs={12} lg={8}>
        
            <div ><img className={classes.images} src="https://media-cdn.tripadvisor.com/media/photo-s/19/f4/5c/95/photo2jpg.jpg" alt="" /></div>
            <div ><img className={classes.images}  src="https://hoangnam-soon.github.io/Cat-Cafe/img/Place/about-home-1.jpg" alt="" /></div>
         
            
          
        </Grid>
        
       
      </Grid>
    </div>
  );
}
