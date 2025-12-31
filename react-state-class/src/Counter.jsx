import { useState } from 'react';
export default function Counter(){
 let [count, setCount]=useState(0);
 console.log(count);

 function incCount(){
  setCount(count+1);
 }

 return(
    <div>
       <button onClick={incCount}>Increase Count</button>
       <h3>Count:{count}</h3>
    </div>
 );
}