
import UpLoadPost from './components/UpLoadPost';
import Information from './components/Information';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles ( {
    root : {
      display : 'flex',
      justifyContent : 'space-evenly'
    }
})

function App() {
  const classes = useStyles();
  
  return (
    
    <div className={classes.root} >
      <Information />
      <UpLoadPost />
     

    </div>
  );
}

export default App;
