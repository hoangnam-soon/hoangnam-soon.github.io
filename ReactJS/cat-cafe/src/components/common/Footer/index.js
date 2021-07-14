import React from 'react'
import { makeStyles } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { Container,Typography } from '@material-ui/core'

const useStyles = makeStyles({

    footer : {
        display : 'flex',
        justifyContent: 'space-between',
        padding : '40px 0px',
        
        

    },
    logoFooter : {
        width : '200px'
      
    },
    footerTagLink:{
        display : 'grid'
    },
    footerTagTitle: {
        fontSize: '24px',
        textTransform: 'uppercase',
        fontFamily: 'Bebas Neue',
        color: 'white'
    },
    footerTagInfor : {
        fontSize : '18px',
        textTransform : 'none',
        color : 'white'
    },
    footerBottom : {
        textAlign: 'center',
        padding : '20px 0px 20px 0px'
    },
    footerBottomLine : {
        width: '80%',
        height: '1px',
        backgroundColor: 'white',
        margin: '22px',
        display: 'inline-block'
        
    },
    

    

})


const Footer = () => {

    const classes = useStyles();

    const InforFooter = () => {

        return(<>
            <div className={classes.footer}>
                <div><Link><img className={classes.logoFooter} src='https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png'></img></Link></div>
                <div >
                   <h2 className={classes.footerTagTitle}>ABOUT</h2>
                   <div className={classes.footerTagLink}>
                 <div className={classes.footerTagInfor}><Link to='/Store' >Cửa hàng</Link></div>  
                 <div className={classes.footerTagInfor}><Link >Sản phẩm</Link></div>   
                 <div className={classes.footerTagInfor}><Link >Phụ kiện pet</Link></div>   
                 <div className={classes.footerTagInfor}><Link >Blog</Link></div>  
                   </div>
                </div>
                <div >
                    <div>
                       <h2 className={classes.footerTagTitle}>ALWAYS-ON SUPPORT</h2>
                       <div className={classes.footerTagInfor}>0967855675 (8:00 - 22:00)</div>
                    </div>
                    <div>
                        <h2 className={classes.footerTagTitle}>ADDRESS</h2>
                        <div className={classes.footerTagInfor}>82/168 Đường Kim Giang, <br />
                        Đại Kim, Thanh Xuân, <br/>
                        Hà Nội, Việt Nam</div>
                    </div>   
               
                </div>
                <div >
                     <h2 className={classes.footerTagTitle}>EMAIL</h2>
                     <div className={classes.footerTagInfor}>hoangnam1739@gmail.com</div>
                </div>
    
            </div>
            <div className={classes.footerBottom}>
                <div className={classes.footerBottomLine}></div>
                <div className={classes.footerTagInfor}>Copyright © 2021 Black Cat Coffee . All rights reserved.</div>
            </div>
        </>
           
            
           
        
        )
    
        
    }

   return(
       <>
        <Typography component="div" style={{backgroundColor:'black'}}>
        <Container fixed >
            
            <Typography component="div">
             <InforFooter/>
            </Typography>

            </Container>
        </Typography>
       </>
   )
}
export default Footer