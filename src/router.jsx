import React from 'react'

import { Routes, Route} from 'react-router'

import Nav from './components/Nav/Nav'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home'
import CreateEvents from './pages/CreateEvents/CreateEvents'
import FindTickets from './pages/FindTickets/FindTickets'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'
import NotFound from './pages/NotFound'

export default function router() {
  return (
    <> 
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create-events' element={<CreateEvents />} />
            <Route path='/find-tickets' element={<FindTickets />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/*' element={<NotFound />} />
        </Routes>
        <Footer />
  </>
  )
}
