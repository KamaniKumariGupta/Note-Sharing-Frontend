
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { analytics } from './Helpers/index';
import { logEvent } from 'firebase/analytics';
import Login from './Pages/Login';

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
       
        
        <Route path='/login' element={<Login/>}/>
      

      </Routes>


      <Footer/>
    </>
  )
}

export default App
