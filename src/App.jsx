
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { analytics } from './Helpers/index';
import { logEvent } from 'firebase/analytics';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import AboutUs from './Pages/AboutUs'
import Notes from './Pages/Notes'
function App() {
  if (analytics) {
    logEvent(analytics, 'Init.....')
  }


  const userToken = "ananrgkjhgr"
  return (
    <>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home token={userToken} />} />
        <Route path='/chat' element={<Chat/>} />
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/> 
        <Route path='/notes' element={<Notes/>}/> 

      </Routes>


      <Footer/>
    </>
  )
}

export default App
