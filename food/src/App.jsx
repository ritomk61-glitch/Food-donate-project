
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/Login'
import Work from './components/Work'
import Foods from './components/Foods'
import Signup from './components/Signup'


const App = () => {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/food' element={<Foods/>}/>
        <Route path='/signup' element={<Signup />}/>
      </Routes>
    </div>
  )
}

export default App

