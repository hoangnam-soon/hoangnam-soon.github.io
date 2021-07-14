import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundImage:
    'url("https://i.pinimg.com/originals/26/98/1b/26981b8251fcf06abc08c8d5edfe57fe.jpg")',
    // backgroundRepeat: 'round'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  spacing : {
    width : '100%',
    margin : 'auto',
  
  },
  images : {
    maxWidth : 396,

    width : '100%',
    transition : 'all 0.4s',
    "&:hover" : {
      transform: "scale(1.02)"
    },
    '@media (max-width : 1200px)':{
      maxWidth : "none"
  
    },
   
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
  wrapItem : {
    margin: '13px 273px',
    textAlign: 'center',
    display: 'flex',
    
    "@media (max-width:1400px)":{
      margin : '0px 140px'
      
    },
    "@media (max-width:1200px)":{
      margin : '13px 100px'
      
    },
    "@media (max-width:992px)":{
      margin : '13px 60px'
      
    },
    "@media (max-width:768px)":{
      margin : '13px 30px'
      
    },
    "@media (max-width:576px)":{
      margin : '13px 10px'
      
    },
    
  },
  wrapBlog : {
    margin : 'auto',
    padding : '0px',
    backgroundColor : '#f2f2f2'
  },
  image : {
    width : '100%',
  },
  titleBlog1 : {
    fontSize:16,
    fontFamily: 'Oswald',
    fontWeight:'500',
    margin: '10px 0px 5px 20px',
    color : '#EA8025',
   
    '@media (max-width : 768px)':{
      fontSize:'14px',
      color : 'black',
      marginLeft : '10px'
  
    },
   

  },
  titleBlog2 :{
    fontSize:14,
    fontFamily: 'Oswald',
    fontWeight:'100',
    margin: '10px 0px 5px 20px',
    '@media (max-width : 768px)':{
      fontSize:'12px',
      color : 'black',
      marginLeft : '10px'
  
    },
    
  },
  viewMore :{
    '&:hover':{
      backgroundPosition: 'left',
      color : 'black',

    },
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #EA8025 50%, #fff 50%) right',
    backgroundSize: '200%',
    transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    margin: '19px 20px',
    float : 'left',
    "@media (max-width:768px)":{
      margin : '10px 20px'
      
    },
   

},

}));

export default function Bloghomepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} classes={{"spacing-xs-3":classes.spacing}}>
      <Grid classes={{'root':classes.wrapTitle}} item lg={8} xs={12}>
          <div className={classes.titleLeft}>blog</div>
          <div ><Link className={classes.allButton} to='/Blog' >xem thêm</Link></div>
      </Grid>

        
          
          
          
          
          
          
          
          
          
          
          <Grid className={classes.wrapBlog} item xs={12} sm ={8} >
            <div><img className={classes.image} src="https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-1.jpg" alt="" /></div>
            <div className={classes.titleBlog1}>7 BÍ KÍP KHỬ MÙI HÔI CHO CÚN VÀ MIU 100% TỰ NHIÊN</div>
            <div className={classes.titleBlog2}>THỨ BẢY 22.03.2021 Làm sao để loại bỏ mùi hôi cơ thể của Cún và Miu nhanh chóng và hiệu quả?</div>
            <Link className={classes.viewMore}>xem thêm</Link>
          </Grid>
          {/* <Grid item xs={12} sm={6} lg={3}>
            <div><img src="https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-2.jpg" alt="" /></div>
            <div>Diệt Bệnh Nấm Cho Mèo Ngay Tại Nhà</div>
            <div>Nấm là căn bệnh không lạ lẫm đối với các sen nuôi mèo. Bệnh chủ yếu do ký sinh trùng gây ra và</div>
            <Link>xem thêm</Link>
          </Grid>
          <Grid item xs={12} sm={6} lg={3} >
            <div><img src="https://hoangnam-soon.github.io/Cat-Cafe/img/BLOG/blog-img-3.jpg" alt="" /></div>
            <div>Cách để khiến mèo yêu bạn</div>
            <div>Mèo cần tình yêu và sự quan tâm để có một cuộc sống khỏe mạnh. Nếu được yêu thương và chăm sóc đúng cách ...</div>
            <Link>xem thêm</Link>
          </Grid> */}

        
        
        
      </Grid>
    </div>
  );
}
