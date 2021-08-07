import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { FormControl,FormLabel,RadioGroup,Radio,FormControlLabel } from '@material-ui/core';
import { Checkbox,TextareaAutosize  } from '@material-ui/core';
import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';


const useStyles = makeStyles((theme) => ({
  root: {
      display : 'grid',
    '& > *': {
      margin: theme.spacing(1),
      width: '300px',
    },
  },
  root2 : {
      display : 'flex'
  },
  birthday : {
      width : 100,
      margin : 'auto'
  }
 
}));

export default function BasicTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');
  const [state, setState] = React.useState({
   
    checkedB: true,
  
  });
  const handleChangeCheckBox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  

  return (
    <Formik
     initialValues={{ name: '', date: '',month : '', year : '', email: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .max(20,'Tên bạn quá dài')
           .required('Required'),
         date: Yup.number()
           .max(31, 'Wrong date')
           .min(1, 'Wrong date')
           .required('Required'),
        month: Yup.number()
           .max(12, 'Wrong moth')
           .min(1, 'Wrong moth')
           .required('Required'), 
       year: Yup.number()
           .max(2021, 'Wrong year')
           .min(1910,'You to old')
           .required('Required'),     
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }} 
    >
         {({errors,handleBlur,values,setFieldValue}) => (
          <Form className={classes.root}  >
      
                <TextField 
                name = "name"
                label="Name" 
                type ="text"
                 variant="outlined"
                 error = {errors.name}
                 helperText={errors.name}
                //  value={values.name} 
                 inputProps={{
                   onBlur :handleBlur
                 }}
                 onChange={(e) => {
                  
                 values.name = e.target.value }}
                                     
                  />
                 
                  
                <Form className ={classes.root2} >
                <TextField className={classes.birthday}   
                label="Date" 
                name = "date" 
                type ="text"
                 variant="outlined"
                 error = {errors.date}
                 helperText={errors.date}
                
                 inputProps={{
                   onBlur :handleBlur
                 }}
                 onChange={(e) => {
                  
                 values.date = e.target.value }}  />
                <TextField className={classes.birthday}   
                label="Month" 
                name = "month" 
                type ="text"
                 variant="outlined"
                 error = {errors.month}
                 helperText={errors.month}
                
                 inputProps={{
                   onBlur :handleBlur
                 }}
                 onChange={(e) => {
                  
                  values.month = e.target.value }}  />
                <TextField className={classes.birthday}   
                label="Year" 
                name = "year" 
                type ="text"
                 variant="outlined"
                 error = {errors.year}
                 helperText={errors.year}
                
                 inputProps={{
                   onBlur :handleBlur
                 }}
                 onChange={(e) => {
                  
                  values.year = e.target.value }}  />
                </Form>
                
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              <FormControlLabel
                  control={
                    <Checkbox
                      checked={state.checkedB}
                      onChange={handleChangeCheckBox}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Single"
                />
                <TextareaAutosize aria-label="minimum height" minRows={3} placeholder="Mô tả ..." />
                <button type="submit">Submit</button>
              </Form>
         )}
    </Formik>
    
  );
}
