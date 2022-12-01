import { useState } from "react"

const Counter = () => {
    const [count,setCount] = useState(10)
    return (<>
        <div>카운트 수 : {count}</div>
        <h3>카운트 플러스</h3>
        <button onClick={()=>{setCount(count + 1)}}>클릭</button>
        <h3>카운트 빼기</h3>
        <button onClick={()=>{setCount(count - 1)}}>클릭</button>
        </>)
}

 
export default Counter 