import React from 'react'
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './index.css'


const useStyles = makeStyles((theme) => ({
    MyRootButon: {
        backgroundColor: '#f26a19'
    }
  }));

const SearchBox = ({classesProps}) => {
    const classes = useStyles();
    return (
        <div className='seachbox'>
            <TextField id="outlined-basic" placeholder="Nhập tên sản phẩm"/>
            <Button variant="contained" classes={{
                root: classes.MyRootButon,
            }}>Tìm kiếm</Button>
        </div>
    )
}

export default SearchBox