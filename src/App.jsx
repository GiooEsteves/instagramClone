import { Route, Routes } from "react-router-dom"
import HomePage from './pages/HomePage/HomePage'
import AuthPage from "./pages/AuthPage/AuthPage"

function App(){
  return(
  <p>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/auth' element={<AuthPage/>}/>
    </Routes>
  </p>
  )
}

export default App
