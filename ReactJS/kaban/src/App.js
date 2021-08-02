// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Card from './componnents/Card';



const SortableItem = SortableElement(({item,onDelete}) => <li><Card item={item} onDelete={onDelete} /></li>);

const SortableList = SortableContainer(({items,onDelete}) => {
  return (
    <ul>
      {items.map((item, index) => (
        <SortableItem key={item.id} index={index} item={item} onDelete={onDelete}/>
      ))}
    </ul>
  );
});

function App() {


   const [board, setBoard] = useState([
            {  
            id :1 ,
            date  : '27/07/2021',
            title : 'Today is goodday',
            discription : 'How do you feel today',
            button : 'Learn more'
        },
        {  id :2 ,
          date  : '28/07/2021',
          title : 'Tomorrow is goodday',
          discription : 'I win',
          button : 'Learn more'
        },
        {    id :3 ,
          date  : '29/07/2021',
          title : 'Thursday is goodday',
          discription : 'I did it',
          button : 'Learn more'
        },
        {    id :4 ,
          date  : '30/07/2021',
          title : 'is beautyful day',
          discription : 'Amazing',
          button : 'Learn more'
        },
        {    id :5 ,
          date  : '5/12/2021',
          title : 'N2 goukaku',
          discription : 'Great,Amazing',
          button : 'Learn more'
        },
        {    id :6 ,
          date  : '2/08/2021',
          title : 'Frist day to work',
          discription : 'How do you feel today',
          button : 'Learn more'
        },
        {    id :7 ,
          date  : '27/07/2022',
          title : ' Work in Japan',
          discription : 'How do you feel today',
          button : 'Learn more'
        },]);
       const onSortEnd = ({oldIndex, newIndex}) => {
          let newArray = arrayMove(board, oldIndex, newIndex)
          setBoard (newArray)
        };
        const onDelete = (item) => {
          let newId = item.id;
         let newBoard =  board.filter(Element => Element.id !== newId);

          setBoard(newBoard)
        }
  return (<>

  
    <SortableList useDragHandle items={board} onSortEnd={onSortEnd} onDelete={onDelete} />
  </>
    
  );
}

export default App;
