import {useState} from 'react'

function App() {
  const[color, setcolor] = useState("white")
  
  return (
    <div className="container">
      <h1 className='title'>COLOR PICKER</h1>
      <div className= "btn-group">
        <button className="btn-red" onClick={()=>setcolor("red")}>RED</button>
        <button className="btn-blue" onClick={()=>setcolor("blue")}>BLUE</button>
        <button className="btn-green" onClick={()=>setcolor("green")}>GREEN</button>
    </div>
    <div className = "color-box" style={{backgroundColor:color}}></div>
    </div>
  )
}

export default App