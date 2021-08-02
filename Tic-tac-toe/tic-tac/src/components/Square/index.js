import React from 'react';



const Squares = ({value,onClick}) => {

  //  const [player, setPlayer] = useState(null)
   
   
    return (

        <button className= 'square' onClick={onClick}  >
              
           {value}
            
        </button>
    )
}
export default Squares