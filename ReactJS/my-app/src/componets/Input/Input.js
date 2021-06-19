

// var timer
// class Input extends React.Component{


//     update(e){
//         let {keyCode} = e
//         if(keyCode===13){
//             setTimeout(() => {
//                 this.props.onAdd()
//             }, 1000);

//         }else {

//             // sau khi ngừng gõ 0.5s ->báo cho App updatetitle
//             clearTimeout(timer)
//             timer = setTimeout(() => {
//                 let {value} = e.target
//                 this.props.onUpdateTitle(value)
//             }, 1000);
//         }

//     }



//     render(){
//         return(
//             <input onKeyUp={(e)=>this.update(e)}/>
//         )
//     }
// }


import React,{useEffect,useRef} from 'react'


const Input = ({onUpdateValue,onAdd}) =>{

    const inputTitle = useRef(null)
    const inputInfor = useRef(null)

    useEffect(() => {
       if(onAdd){
           onUpdateValue({
               title : inputTitle.current.value,
               infor : inputInfor.current.value
           })
       }
    }, [onAdd])



  return <>
       <input ref={inputTitle}/>
         <textarea ref={inputInfor} /> 
  </>
  
}

export default Input