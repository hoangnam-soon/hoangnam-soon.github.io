// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react'

// class App extends Component{
//   constructor(props){
//     super(props)
//     this.state={
//       data :{
//         title :'',
//         infor :''
//       },
//       dataList : [],
//       arrDone :[]
//     }
//   }
//   updateTitle(title){
//     let newData = {...this.state.data,title}

//     this.setState({
//       data : newData
//     })

//   }
//   updateInfor(infor){
//     let newData = {...this.state.data,infor}
//     this.setState({
//       data : newData
//     })
//   }
//   onAdd(){
//     let {title,infor} = this.state.data
//     if(!title) {
//       return
//     }
//     let newDataList = [...this.state.dataList]
//     newDataList.push({
//       id: new Date().getTime(),
//       title,
//       infor
//     })
//     this.setState({
//       dataList : newDataList
//     })
//   }
//   onDelete(id){
  
//     let newDataList = this.state.dataList.filter(item => {
//       return item.id !== id
//     })
//     this.setState({
//       dataList: newDataList
//     })
//   }

//   render(){
//     return(
      // <div className='App'>
      //   <h1>MJ's ToDo List</h1>
      //   <Input  onAdd={()=>this.onAdd()} onUpdateTitle={(value)=>this.updateTitle(value)} />
      //   <Infor  onAdd={()=>this.onAdd()} onUpdateInfor={(value)=>this.updateInfor(value)} />
      //   <button onClick={()=>this.onAdd()}>Add ToDo</button>
      //   <List onDelete={(id)=>this.onDelete(id)} dataList={this.state.dataList}/>
      // </div>
//     )
//   }
// }


// export default App;
import React, {useState,useEffect} from 'react'
import './App.css'
import Input from './componets/Input/Input.js'
// import Infor from './componets/Infor/Infor.js'
import List from './componets/List/List.js'



const App = () =>{
  const [data, setData] = useState({title:'',infor:''})
  const [dataList, setDataList] = useState([])
  const [arrDone, setArrDone] = useState([])
  const [onAdd, setOnAdd] = useState(false)


  
  useEffect(() => {
    if(data.title) {
      handleAdd()
    }
  }, [data])


  const updateValue = (title) =>{
    
    setData(title)
  }
  const trigger =() =>{
    setOnAdd(true)
  }
  
  const handleAdd = () => {
    // thuc hien push vao state dataList
    let newDataList = [...dataList]
    newDataList.push({
      id: new Date().getTime(),
      title: data.title,
      infor: data.infor
    })
    setDataList(newDataList)
    setOnAdd(false)
  }

  return  (
    <div className='App'>
  <h1>MJ's ToDo List</h1>
  <Input handleAdd={()=>handleAdd()} onAdd={onAdd} onUpdateValue={(value)=> updateValue(value)}/>
  <button onClick ={()=> trigger()}>Add ToDo</button>
  <List dataList={dataList}/>
</div>
    
  )
  
  
}
export default App

