import { useState } from "react";
function Counter(){
    const [count, setCount]= useState(0);
    return(
        <>
        <p>current count :{count}</p>
        <button onClick={()=> setCount(count +1)}> increment</button>
        <button onClick={()=> setCount(count -1) }> decrement</button>
        <button onClick={()=> setCount(0)}>reset</button>
        </>
    )
}

export default Counter;