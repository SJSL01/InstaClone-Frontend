import React from 'react'
import Postview from './Layouts page/PostView'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing_Page from './LandingPage/Landing_Page'
import CreatePost from './CreatePost/CreatePost'
import { ReloadContextProvider } from './Context/Reload'

export default function App() {
  return (
  
      <ReloadContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Landing_Page/>} />
            <Route path='/postView' element={<Postview />} />
            <Route path='/createPost' element={<CreatePost />} />
          </Routes>
        </BrowserRouter>
      </ReloadContextProvider>


  )
}
