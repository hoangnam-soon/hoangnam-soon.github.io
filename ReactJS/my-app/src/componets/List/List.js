

// class List extends React.Component{

//     renderMenu(){
//         return(
//             <>
//                 {
//                     this.props.dataList && this.props.dataList.length > 0 && this.props.dataList.map((item,index) =>{
                    //   return <li>
                    //       <div className='item'><input type='checkbox'></input>  </div>
                    //       <div className='item-title'>{item.title}</div>
                    //       <div className='item-infor'>{item.infor}</div>
                    //       <div className='item-title' ><i class="fas fa-trash" onClick={()=>this.props.onDelete(item.id)}></i></div>
                    //   </li>

//                     })
//                 }
//             </>
//         )
//     }
//     render () {
//         return (
            // <div className='Todo'>
            //     <ul>
            //         {this.renderMenu()}
            //     </ul>
            // </div>
//         )
//     }

// }

import React from 'react'
import './List.css'
import PropTypes from 'prop-types';


const List = ({dataList, ...props}) => {


    const renderMenu = () => {

    // render list data by orderdone filed
    let arrNotDone = dataList.filter(item => !item.orderDone)
    let arrDone = dataList.filter(item => item.orderDone)
    arrDone.sort((a, b) => a.orderDone - b.orderDone)
    let arrRender =  arrNotDone.concat(arrDone)

    // se tra ve 1 doan JSX
    return (
        <>
        {
            arrRender && arrRender.length > 0 && arrRender.map((item, index) => {
                return <li>
                          <div className='item'><input type='checkbox'></input>  </div>
                          <div className='item-title'>{item.title}</div>
                          <div className='item-infor'>{item.infor}</div>
                          <div className='item-title' ><i class="fas fa-trash" onClick={()=>this.props.onDelete(item.id)}></i></div>
                      </li>
            })
        }
        </>
    )
}

return  <div className='Todo'>
<ul>
    {renderMenu()}
</ul>
</div>
}


List.defaultProps = {
dataList: [],
}

List.propTypes = {
dataList: PropTypes.array,
}

export default List