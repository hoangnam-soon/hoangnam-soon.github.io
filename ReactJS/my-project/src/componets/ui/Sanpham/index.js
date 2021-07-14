import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { sanpham } from '../../../assets/images/Item';
import Listitem from '../Listitem';


const useStyles = makeStyles({


  rootItem : {
    backgroundColor :'#F2F2F2',
  },

  spacing : {
    width : '100%',
     margin  : 0
  },
   imageBanner : {
       width : '100%'
   },
   wrapBox : {
       padding : " 60px 180px",
       
       '@media (max-width : 1200px)':{
        padding : '40px 90px',
    
      },
    
       '@media (max-width : 768px)':{
        padding : '20px 20px',
    
      },
      '@media (max-width : 568px)':{
        padding : '10px 25px',
        margin : 'auto',
      },
      '@media (max-width : 400px)':{
        padding : '10px 15px',
        margin : 'auto',
      },
    

   },
  
   menuLeft : {
        backgroundColor:'#f3c7c7',
        height: '341px',
        position : 'sticky',
        top : '60px',
        '@media (max-width : 1200px)':{
             display : 'flex',
             height : 'fit-content',
             marginLeft : '18px'
               
          },
        
        
        
        

   },
   titleLeft : {
//     '&:after':{
//       content: '""',
//       width: '50%',
//       height: '4px',
//       backgroundColor: '#EA8025',
//       display: 'block',
   
      
//   },
  fontSize: '16px',
  textTransform: 'uppercase',
  fontFamily: 'Oswald',
  color: 'black',
  width: 'fit-content',
  padding : '12px 20px',
  fontWeight: '500',
  '@media (max-width : 1200px)':{
    fontSize:'18px',
    padding : '8px 10px',

  },
  '@media (max-width : 768px)':{
    fontSize:'14px',
    padding : '8px 10px',

  },
  '@media (max-width : 567px)':{
    fontSize:'12px',
    padding : '5px 8px',

  }


  },
  wrapItem : {
     borderLeft: '#EA8025 2px solid',
     '@media (max-width : 1200px)':{
        border : 'none'
          
     },

  }

});




const Sanpham = () => {

    const classes = useStyles ();


    return(<div className = {classes.rootItem}>

          <div><img className={classes.imageBanner} src="https://hoangnam-soon.github.io/Cat-Cafe/img/Banner/banner-taycoffee-3.jpg" alt="" /></div>
           <div>
                <Grid className={classes.wrapBox} container spacing={2} classes={{"spacing-xs-2":classes.spacing}}>
                    <Grid className={classes.menuLeft} item xs={8} lg = {3}  >
                     {
                        sanpham.map((item,index)=>{
                           
                            return(
                                <div className={classes.titleLeft}>{item.nameItem}</div>
                            )
                        })
                     }
                    </Grid>
                    <Grid className ={classes.wrapItem} item xs={12} lg = {9}>
                        <Grid container spacing ={2} classes={{"spacing-xs-2":classes.spacing}} >
                            <Listitem/>
                        </Grid>
                        
                    </Grid>
                </Grid>
           </div>
    </div>
    )
    
}
export  default Sanpham