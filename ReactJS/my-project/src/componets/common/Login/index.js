import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Dialog } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles =makeStyles({
  
  heightAll : {
    maxHeight: 'unset',
    width :320
    // background: 'red'
  },
  closeButton : {
    // float: 'right',
    padding: '3px 7px',
    position: 'absolute',
    right : 5,color:'white',
  },
  imgLogin :{
    width :'100%',
  },
  userMain :{
    maxWidth: 270,
    margin: 'auto'
  },
  userInputMain :{
    maxWidth: "300px",
    marginTop:  "20px ",
    border: "black 1px solid",
    padding: "8px 8px",
    borderRadius: "10px",
    textAlign: "left"
  },
  userIcon : {
    fontSize: "18px", color: "black", opacity: 0.8
  },
  userInput :{
    border: "none",
    outline: "none",
    fontSize: "15px",
    marginLeft: "5px",
    width : '85%',
    height:25

  },
  forgetPass :{
    color: "black",
  fontSize: "14px",
  textTransform: "none",
  float: "right",
  marginTop:'10px',
  
  },
  loginButton :{
    marginTop :45,
    textAlign:'center',
  }, 
  login : {
    '&:hover':{
        backgroundPosition: 'left',
        color : 'white',
  
      },
      display: 'inline-block',
      padding: '10px 20px',
      border: '1px solid #666666',
      color: 'black',
      borderRadius: '3px',
      background: 'linear-gradient(to left, #fff 50%, #000 50%) right',
      backgroundSize: '200%',
      transition: 'all 0.7s cubic-bezier(0.5,1.6,0.4,0.7)',
      marginLeft: '5px !important',
      fontSize : 'medium'
 },
 text :{
   fontSize :14,
 },
 add :{
  color: "red",
fontSize: "14px",
textTransform: "none",
float: "right",
margin:'10px',

},
loginIcon : {
  color :'black',
  fontSize : '30px',
  marginLeft: 10
}
    
})



const Login = ({open,closeLogin}) => {
      const classes = useStyles();
      
     

  return (
   
      
      <Dialog classes={{paperScrollPaper:classes.heightAll}} open={open} onClose ={()=> closeLogin()} >

      <div>
        <div>
          <span onClick={()=> closeLogin()} className={classes.closeButton}><i class="fas fa-times"></i></span>
          <div><img className={classes.imgLogin} src="https://hoangnam-soon.github.io/Cat-Cafe/img/logo4.png" alt="" /></div>
          
        </div>
        <div className={classes.userMain}>
          <form action="">
            <div className={classes.userInputMain}>
              <span className={classes.userIcon}><i class="fas fa-user-circle"></i></span>
              <input className={classes.userInput} type='text' placeholder="Email"></input>
            </div>
            <div className={classes.userInputMain}>
              <span className={classes.userIcon}><i class="fas fa-lock"></i></span>
              <input className={classes.userInput} type='text' placeholder=""></input>
            </div>
            
          </form>
         <div> <Link className={classes.forgetPass}>Quên mật khẩu?</Link></div>

         <div className={classes.loginButton}> 
          <button className={classes.login}>Đăng nhập</button>
          <p className={classes.text}>Hoặc đăng nhập với</p>
          <div>
            <Link className={classes.loginIcon}><i  class="fab fa-facebook"></i></Link>
            <Link className={classes.loginIcon}><i  class="fab fa-google"></i></Link>

          </div>
          
          </div>
          
          <div>
            
            <Link className={classes.add}>Chưa có tài khoản? Đăng ký ngay</Link>
          </div>
    
        </div>
      </div>

      </Dialog>
    
  )
}
export default Login