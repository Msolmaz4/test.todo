import React, { useState } from 'react'

const Todo = () => {

 const [text ,setText] = useState('')
 const [list ,setList] =useState([
    {
        name:'item a'
    },
    {
        name:'item b'
    },
    {
        name:'item c'
    }
    
 ])

 const add =()=>{
    setList([...list,{name:text}])
    setText('')
 }

//label acariy teste ulasmak icin boyule kolaylik yaopar
  return (
    <div>
        
        <label>
            bunutest
        <input
        value={text}
        onChange={(e)=>setText(e.target.value)}
         />
        </label>
       
        <button onClick={add}>ekleme</button>
        {
            list.map((er)=>(
                <div>{er.name}</div>
            ))
        }

    </div>
  )
}

export default Todo