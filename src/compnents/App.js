import React from 'react'

const App = () => {
    const myItem = "jared"
  
    return (
      <ul>
        <li>Item1</li>
        <li>Item2 {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
      </ul>
    )
  }

  export default App