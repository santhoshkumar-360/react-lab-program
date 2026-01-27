import {useEffect,useState} from 'react';

function App() {
  const [greetings,setGreetings]=useState("")
  useEffect(()=>{
    let hours = new Date().getHours().toString().padStart(2,'0')
    let minutes = new Date().getMinutes().toString().padStart(2,'0')
    let seconds = new Date().getSeconds().toString().padStart(2,'0')
    if(hours<12){
      setGreetings(`Good Morning ${hours}: ${minutes} : ${seconds}`)
    }
    else if (hours>12 && hours<=17){
      setGreetings(`Good Afternoon ${hours}: ${minutes} : ${seconds}`)
    }
    else if (hours>17 && hours<=19){
      setGreetings(`Good Evening ${hours}: ${minutes} : ${seconds}`)
    }
  })
  return (
    <div>
      <h1>{greetings}</h1>
    </div>
  )
}

export default App