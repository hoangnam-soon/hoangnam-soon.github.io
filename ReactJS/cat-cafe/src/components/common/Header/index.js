import React, { useState } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Icon } from '@material-ui/core';
import {
    Link
  } from "react-router-dom";
import Menu from '../../UI/Menu'
import SearchBox from '../../UI/SearchBox'
import './index.css'


const Header = () => {


    const [showSearchBox, setShowSearchBox] = useState(false)

    const menu = [
        {
            label: 'cửa hàng ',
            link: '/Store',
            // children: [{
            //         label: 'nhân viên quán'
            //     },
            //     {
            //         label: 'không gian quán'
            //     }
            // ]

        },
        {
            label: 'sản phẩm',
            link : '/Item'
        },
        {
            label: 'phụ kiện pet',
            link : '/Pet-item'
        },
        {
            label: 'blog',
            link : '/Blog'
        }
    ]

    return(
        <div className='header'>
        <div className='logo'>
            <Link to='/'><img src='https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png'></img></Link>
        </div>
            <Menu dataList={menu}/>
            {
                showSearchBox && <SearchBox/>
            }
            <div className='header-right'>
            <Icon className="fas fa-search default-icon" style={{color:'white'}}  onClick={() =>setShowSearchBox(!showSearchBox)}/>
            
            <Link to ='/Cart'><Icon className= "fas fa-shopping-cart default-icon" style={{color:'white'}}   /></Link>
            <Link to ='https://www.facebook.com/linkin.parks.169/'><Icon className= "fab fa-facebook-square default-icon" style={{color:'white'}}  /></Link>
            <Link to ='https://www.instagram.com/hoangnam1739/'><Icon className= "fab fa-instagram default-icon" style={{color:'white'}}   /></Link>
            <Link to ='#'> <Icon className= "fab fa-tiktok default-icon" style={{color:'white'}}   /></Link>
            </div>
           
           
            
   
        </div>
    )
}

export default Header