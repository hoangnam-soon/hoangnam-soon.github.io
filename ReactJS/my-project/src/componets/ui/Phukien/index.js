import React from 'react';
import { makeStyles } from '@material-ui/core';
// import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Listpetitem from '../Listpetitem';
import { petitem } from '../../../assets/images/Petitem';



const useStyles = makeStyles({


  rootItem : {
    backgroundColor :'#F2F2F2',
  },

  spacing : {
    width : '100%',
     margin  : 0,
     padding : 0,
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
        padding : '20px 35px',
    
      },
      '@media (max-width : 568px)':{
        padding : '10px 35px',
        margin : 'auto',
      },
      '@media (max-width : 400px)':{
        padding : '10px 15px',
        margin : 'auto',
      },
    

   },
  
   menuLeft : {
        backgroundColor:'#f3c7c7',
        height: '600px',
        position : 'sticky',
        top : '60px',
        '@media (max-width : 1200px)':{
             display : 'flex',
             height : 'fit-content',
             marginLeft : '18px'
               
          },
          '@media (max-width: 768px )':{
            display: '-webkit-box',
            overflow: 'scroll',
            height : 'fit-content',
            marginLeft : 10,
          },
         '@media (max-width : 576px)':{
            
          marginLeft : '5px',
          

            
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




const Phukien = () => {

    const classes = useStyles ();


    return(<div className = {classes.rootItem}>

          <div><img className={classes.imageBanner} src="https://hoangnam-soon.github.io/Cat-Cafe/img/Banner/Processed-Food-Pet-food-1920x400.jpg" alt="" /></div>
           <div>
                <Grid className={classes.wrapBox} container spacing={0} >
                    <Grid className={classes.menuLeft} item xs={11} lg = {3}  >
                   
                    {
                        petitem.map((item,index)=>{
                           
                            return(
                                <div className={classes.titleLeft}>{item.name}</div>
                            )
                        })
                     }
                   
                    
                    </Grid>
                    <Grid className ={classes.wrapItem} item xs={12} lg = {9}>
                        <Grid container spacing ={0}  >
                            <Listpetitem/>
                        </Grid>
                        
                    </Grid>
                </Grid>
           </div>
    </div>
    )
    
}
export  default Phukien