import './App.css'
import { Route, Routes } from 'react-browser-router'
import Home from './pages/Home'

function App() {

  return (
    <Routes>
      <Route path='/' element= {<Home />}>
      </Route>
    </Routes>
  )
}

export default App
