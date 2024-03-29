import React,{useState,useEffect} from 'react';
import Square from '../Square';
import './index.css'



const Board = () => {
  const [squares, setSquares] = useState( Array(9).fill(null))
  const [xisNext, setXisNext] = useState(true);
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for(let i = 0 ; i < lines.length ; i ++){
      const [a,b,c] = lines[i];
      if(squares[a] && squares[a]===squares[b] && squares[a] === squares[c]) {
        return squares[a];

      }
    }
    let checkNull = squares.some(function (item) {
      return item === null;
  });

    return checkNull ? null : 'Draw';
  };
 
  
   const renderSquare =(i) => {


    const handleClick = (i) =>{
      console.log('i')
      let newsquares = squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      newsquares[i] = xisNext ? 'X': 'O';
      setSquares(newsquares)
      setXisNext(!xisNext)

    

    }
       


        return <Square value={squares[i]} onClick={() => handleClick(i)} />;
      }
   
      const winner = calculateWinner(squares);
      let status;
      if (winner) {
          status = winner === "Draw" ? winner : "Winner: " + winner;
          
         
          
          console.log('squares',squares)
      } else {
          status = "Next player: " + (xisNext ? "X" : "O");
      }

      
    
     
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        );
      }


export default Board