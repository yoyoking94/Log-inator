import { Routes, Route } from 'react-router-dom'

import './App.css'
import SignIn from './pages/signIn/signIn'
import SignUp from './pages/signUp/signUp'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
