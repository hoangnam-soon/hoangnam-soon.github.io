import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { makeStyles } from '@material-ui/styles'
import Staff from '../../components/common/Staff'

const useStyles = makeStyles({
    bannerImg :{
        maxWidth : '1519px'
    },
    Img : {
        width :'100%'
    },
    titleStaff : {
        marginLeft: 115,
        '&:after':{
            content: '""',
            width: '50%',
            height: '4px',
            backgroundColor: '#cf4d24',
            display: 'block'
        },
        fontSize: '40px',
        textTransform: 'uppercase',
        fontFamily: 'Bebas Neue',
        color: '#cf4d24'

    }

})

const Store = () => {
    const classes = useStyles()

   
    return(
        <>
            <Header/>
             <div className={classes.bannerImg}><img className={classes.Img} src="https://www.catsbest.eu/wp-content/uploads/wesen-der-katze-e1607947002908-1920x600.jpg" alt="" /></div>
                <div className='title-up-item'>
                 <div  className={classes.titleStaff}>Staff</div>
                </div>
             <Staff/>
             <div className='title-up-item'>
                 <div  className={classes.titleStaff}>Store</div>
                </div>

            <Footer/>
        </>
    )
}

export default Store