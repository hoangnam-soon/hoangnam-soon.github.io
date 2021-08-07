import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Avatar } from "@material-ui/core";
import RenderCard from '../RenderCard';

const useStyles = makeStyles ( {


    paper : {
        width : 800
    },
    root : {
      width : 70,
      height : 70,
      margin : 'auto',
      marginBottom : 10
  
    },
    app : {
      textAlign : 'center',
      width : 800,
    }
})

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
var timeout
export default function UpLoadPost() {

    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [dataPost, setDataPost] = useState([])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChangeStatus = (e) => {

    let {value} = e.target ;
    if(timeout) {
        clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
        let newData = {...data, status : value}
        setData(newData)
        
    }, 500);
    
    
  };
  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
  const onUploadImage = (event) => {
   
    let {files} = event.target
   
    toBase64(files[0]).then((res)=>{
        let newData = {...data, img: res}
       
        setData(newData)
    }).catch((err)=>{
        console.log(`err`, err)
    })
};
const handleUpload = (item) => {
  
    let newDataPost = [...dataPost]
    newDataPost.push(item)
    setDataPost(newDataPost)
    setOpen(false);
    
   
}



  return (
    <div className={classes.app}>
    <Avatar classes = {{root : classes.root}} alt="Ta ma" src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/69888644_1355396971285762_5682658773932441600_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Xp1C9-JmHlcAX8axAYp&tn=n2NhvcmGfEM8w9AN&_nc_ht=scontent.fhan14-1.fna&oh=a5f2fec605fcf7fbb8a5ffc0a5c26b3a&oe=612E7831" />
      <Button variant="outlined" color="primary" onClick={() => handleClickOpen() }  >
        Bạn đang nghĩ gì?
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        classes = {{paper : classes.paper}}
      >
      <TextField
          id="outlined-multiline-static"
          
          multiline
          rows={6}
          placeholder="Bạn đang nghĩ gì?"
          variant="outlined"
          onChange = {(e) =>onChangeStatus(e)}
        />
        
        <DialogActions>
          <TextField id ="upload-img" type = 'file' onChange={(e) => onUploadImage(e)} >Choose File</TextField>
          <Button onClick={handleClose} color="primary" onClick={() => {
                if(!data.status) {
                    
                    setErrors({
                        status: true
                    })
                } else {
                    handleUpload(data)
                   
                    
                    setData({})
                     
                }
                

            } }>
            Đăng
          </Button>
        </DialogActions>
      </Dialog>
      {
               dataPost.map(item=> <RenderCard data={item}/>)
      }
         
    </div>
  );
}
UpLoadPost.defaultProps = {
    handleUpload: () => null
}

UpLoadPost.propTypes = {
    handleUpload: PropTypes.func,
}