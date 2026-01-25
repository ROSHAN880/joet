import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Archives from './pages/Archives'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Current_issue from './pages/Current_issue'
import Editorial from './pages/Editorial'
import Indexing from './pages/Indexing'
import Publications from './pages/Publications'
import Navbar from './components/Navbar'
import Open_access from './pages/Open_access'
import Publication_charges from './pages/Publication_charges'
import Call_for_papers from './pages/Call_for_papers'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/archives' element={<Archives />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/current_issue/:year/:issue' element={<Current_issue />} />
        <Route path='/editorial' element={<Editorial />} />
        <Route path='/indexing' element={<Indexing />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/open-access' element={<Open_access />} />
        <Route path='/publication-charges' element={<Publication_charges />} />
        <Route path='/call-for-papers' element={<Call_for_papers />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
