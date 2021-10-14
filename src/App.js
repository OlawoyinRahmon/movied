/*import React from 'react'
import  {HomeScreen}  from './NEWBUD/HomeScreen'

const App = () => {
  return (
    <div>
      <HomeScreen />
    </div>
  )
}

export default App*/


import React from 'react'
import MovieFile from './Project/MovieFile'
 import MovieDetail from "./Project/MovieDetail"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
 const App = () => {
  return (
    <div>
      <MovieFile />
      <MovieDetail />
    </div>
  )
}

export default App
