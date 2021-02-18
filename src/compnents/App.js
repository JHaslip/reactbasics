import React from "react"
import CountButton from "./CountButton"

const App = () => {
    const myItem = "jared"
  
    return (
      <div>
        <ul>
          <li>item1 asd</li>
          <li>item255 {myItem}</li>
          <li>{myItem.toUpperCase()}</li>
        </ul>
      </div>
    )
  }

  export default CountButton