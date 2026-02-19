import React from 'react'
import {Link} from "react-router-dom"
function home() {
  return (
    <div>
      <h3>CLICK BUTTON TO GO FOR POST PAGE
        <Link to="/post">GO</Link>
      </h3>
    </div>
  )
}

export default home
