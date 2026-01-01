import { useState } from 'react';
export default function LudoBoard() {
  //let [blueMoves, setBlueMoves] = useState(0);
  //let [redMoves, setRedMoves] = useState(0);
  //let [greenMoves, setGreenMoves] = useState(0);
  //let [yellowMoves, setYellowMoves] = useState(0);
  const [moves,setMoves]=useState({blue:0,red:0,green:0,yellow:0});
  let [arr,setArr]=(["no moves"]);

  let updateBlue=()=>{
    setMoves((prevMoves) =>{
       return {...prevMoves,blue:prevMoves.blue+1}
    });
    setArr((prevArr)=> {
        return [...prevArr,"blue moves"];
    });
    console.log(arr);
  };
  let updateRed=()=>{
    setMoves((prevMoves) =>{
       return {...prevMoves,red:prevMoves.red+1}
    });
  };
  let updateGreen=()=>{
    setMoves((prevMoves) =>{
       return {...prevMoves,green:prevMoves.green+1}
    });
  };
  let updateYellow=()=>{
    setMoves((prevMoves) =>{
       return {...prevMoves,yellow:prevMoves.yellow+1}
    });
  };
  return (
    <div>
      <p> Game Begins!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue Moves={moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        <p>Red Moves={moves.red}</p>
        <button style={{backgroundColor:"red"}}  onClick={updateRed}>+1</button>
        <p>Green Moves={moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>Yellow Moves={moves.yellow}</p>
        <button style={{backgroundColor:"yellow"}} onClick={updateYellow}>+1</button>
      </div>
    </div>
  );
}