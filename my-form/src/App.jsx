import React, { useState } from 'react'

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [submitData, setSubmitData] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, password };
    setSubmitData(data);
    setName("")
    setEmail("")
    setPassword("")

  }
  return (

    <div id='form'>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>NAME :</label>
        <input type="text"
          placeholder='Enter The Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required />
        <br />
        <label>EMAIL :</label>
        <input type="email"
          placeholder='Enter The Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />
        <br />
        <label>PASSWORD :</label>
        <input type="password"
          placeholder='Enter The Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />
        <br />
        <button
          type="submit"
          id='button'>SUBMIT
        </button>

        
      </form>

      {submitData && (
          <div>
            <p><strong>Name : </strong>{submitData.name}</p>
            <p><strong>Email : </strong>{submitData.email}</p>
            <p><strong>Password : </strong>{submitData.password}</p>
          </div>
        )}

    </div>

  )

}


export default App
