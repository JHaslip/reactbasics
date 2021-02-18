import React from 'react'
import ReactDOM from 'reactDOM'

const reactContentRoot = document.getElementById("root")

const App = () => {
  const myItem = "jared"

  return (
    <ul>
      <li>Item1</li>
      <li>Item2</li>
      <li>{myItem.toUpperCase()}</li>
    </ul>
  )
}

ReactDOM.render(<App />, reactContentRoot)