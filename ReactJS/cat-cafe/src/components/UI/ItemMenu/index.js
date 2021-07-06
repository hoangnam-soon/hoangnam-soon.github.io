import React,{useState} from 'react'
import { Container,Typography,CssBaseline} from '@material-ui/core'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Item from '../../common/Item'
import PetItem from '../../common/PetItem';
import Blog from '../../common/Blog'
import './index.css'
import { height } from '@material-ui/system';





const ItemMenu = () => {
       return(<>
           <React.Fragment>
        <CssBaseline />
        <Container fixed>
          <Typography component="div" style={{ backgroundColor: 'beige' }}>
          <Item />
          </Typography>
          <div className='img-home-bettwen'><img src="https://wallpaperaccess.com/full/1327777.jpg" alt="" /></div>
          <Typography component="div" style={{ backgroundColor:'white'}}>
          <PetItem/>
          </Typography>

        </Container>
        <Typography component="div" style={{ backgroundImage:`url("https://images.unsplash.com/photo-1570876050997-2fdefb00c004?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80")`,backgroundSize:'cover',opacity:'0.87' }}>
        <Container fixed >
            
            <Typography component="div">
              <Blog />
            </Typography>

            
            </Container>
        </Typography>
         
        </React.Fragment>
       </>
        
       )
}





export default ItemMenu

