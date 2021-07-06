import React from 'react'
// import {TextField, Button} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
// import clsx from  'clsx';
import {
  Link
} from "react-router-dom";

// const useStyles = makeStyles((theme) => {


// })
import './index.css'


const Menu = ({dataList}) => {


    const renderChildrenMenu = (list) => {

        return (
            <>
                {
                    list.map((item,index)=>{
                        return <>
                        <li key={index}>
                            <Link to ={`${item.link? item.link :''}`}>{item.label}</Link>
                            

                            </li>
                        </>
                            
                        
                    })
                }
            </>
        )
    }




    const renderMenu = () => {

        return (
            <>
                {
                    dataList.length && dataList.map((item,index) =>{
                        return (
                           
                                <li key={index}>
                                <Link to={`${item.link? item.link : ''}`}>{item.label}
                                {
                                    item.children && item.children.length && <ul className='child-menu'>
                                       {renderChildrenMenu(item.children)} 
                                    </ul>
                                } </Link>
                                </li>


                                
                           
                        )
                    })
                }
            </>
        )
 


    }


    return (
        <div >
            <ul className='header-menu'>
                {
                    renderMenu()
                }
            </ul>
        </div>
    )
}


Menu.defaultProps = {
    dataList: []
}

Menu.propTypes = {
    dataList: PropTypes.array.isRequired,
}
export default Menu