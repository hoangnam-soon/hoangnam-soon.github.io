import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    bannerImg :{
        maxWidth : '1519px'
    }
})

const Store = () => {
    const classes = useStyles()

   
    return(
        <>
            <Header/>
             <div><img className={classes.bannerImg} src="https://www.catsbest.eu/wp-content/uploads/wesen-der-katze-e1607947002908-1920x600.jpg" alt="" /></div>
            <Footer/>
        </>
    )
}

export default Store