import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from '../layout/header/Header'
import Footer from '../layout/footer/Footer'
 import Home from '../component/Home/Home'
import CryptoList from '../component/CryptoList'
 
const Routing = () => {
  return (
     <Router>
      <Header/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='cryptoList' element={<CryptoList/>}/>
        </Routes>
      <Footer/>
     </Router>
  )
}

export default Routing