import React,{useState} from 'react'
import { Container,Typography,CssBaseline} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import './index.css'




const Item = () => {
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
    <div className='title-home-item'>menu</div>
    <div className='link-to-all-item'><Link>tất cả sản phẩm</Link></div>
  </div>
   <div className='wrap-menu'>
    {
        listItem.length && listItem.map((item,index)=>{
          return( <Link >
            <div><img src={item.img} alt="" /></div>
            <div className='title-item'>{item.title}</div>
            <div className='price-item'>{item.price}</div>
            <a className='buy-button' href="">mua hàng</a>
          </Link>
          
          )
        })
      }
    </div>

  </>
    

   
      
    
  )
}
export default Item