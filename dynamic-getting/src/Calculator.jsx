
import React, {useState} from 'react'

function Calculator() {
    const [num1,setNum1]=useState("")
    const [num2,setNum2]=useState("")

    const a=Number(num1)
    const b=Number(num2)

  return (
    <div>
        <h1>CALCULATOR</h1>
        <input 
        placeholder='Enter the first value' 
        onChange={(e)=>setNum1(e.target.value)}
        type='number'/>
        <input 
         placeholder='Enter the second value'
         onChange={(e)=>setNum2(e.target.value)}
         type='number'/>

         <div className='output' style={{height:"120px" ,
             width:"200px",
             marginLeft:"400px",
             marginRight:"400px",
             marginTop:"20px",
             border:"5px",
             backgroundColor:"aquamarine"
             }}>
                <p>Addition : {a+b} </p>
                <p>Subtract : {a-b}</p>
                <p>Multiply : {a*b}</p>
                <p>Divide : {b==0 ? "can't divided by zero ": a/b }</p>
         </div>

    </div>
  )
}

export default Calculator