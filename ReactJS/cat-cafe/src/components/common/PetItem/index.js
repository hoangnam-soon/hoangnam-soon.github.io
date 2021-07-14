import React from 'react';
// import { Container,Typography,CssBaseline} from '@material-ui/core';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './index.css';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  buyButton : {
    '&:hover':{
      backgroundPosition: 'left',
      color : 'black',

    },
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #cf4d24 50%, #fff 50%) right',
    backgroundSize: '200%',
    transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    marginLeft: '5px !important',

  },
  allItem : {
    '&:hover':{
      backgroundPosition: 'left',
      // color : 'black',

    },
    display: 'inline-block',
    padding: '8px 15px',
    border: '1px solid #666666',
    color: 'white',
    borderRadius: '3px',
    background: 'linear-gradient(to left, #cf4d24 50%, #000 50%) right',
    backgroundSize: '200%',
    transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
    marginLeft: '5px !important',


  }
})


const PetItem = () => {
  const classes =useStyles();
  const listItem = [
    {
      img :'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_master.jpg',
      title : 'americano',
      price:'40,000 đ'
    },
    {
      img :'https://product.hstatic.net/1000075078/product/cafe-den-da_18234c186f2f44f0a2d7ec1ce0e58158_master.jpg',
      title : 'cafe đen',
      price:'35,000 đ'
    },
    {
      img :'https://product.hstatic.net/1000075078/product/cafe-sua-da_9073dfe2143d428a91a370e79df77e49_master.jpg',
      title : 'cafe sữa',
      price:'40,000 đ'
    },
    {
      img :'https://product.hstatic.net/1000075078/product/espresso-nong_4b32833e9a5f48768ea5d5d2a4df0303_master.jpg',
      title : 'espresso',
      price:'40,000 đ'
    },
    {
      img :'https://product.hstatic.net/1000075078/product/latte-nong_ffcd92de11f74937bce4197823246d07_master.jpg',
      title : 'latte',
      price:'40,000 đ'
    },
    // {
    //   img :'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_master.jpg',
    //   title : 'americano',
    //   price:'40,000 đ'
    // },
  ]
  
  return(<>
  <div className='title-up-item'>
    <div className='title-home-item'>pet item</div>
    <div className='link-to-all-item'><Link to='/Pet-item' className={classes.allItem}>tất cả sản phẩm</Link></div>
  </div>
   <div className='wrap-menu'>
    {
        listItem.length && listItem.map((item,index)=>{
          return( <Link >
            <div><img src={item.img} alt="" /></div>
            <div className='title-item'>{item.title}</div>
            <div className='price-item'>{item.price}</div>
            <Link className={classes.buyButton}>mua hàng</Link>
          </Link>
          
          )
        })
      }
    </div>

  </>
    

   
      
    
  )
}
export default PetItem