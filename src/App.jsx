import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DataPage from './pages/DataPage'
function App() {
  

  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}>
            <Route index element={<DataPage/>}/>

            <Route path='data'  element={<DataPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App
