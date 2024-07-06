import React from 'react'
import './App.css'
import { TB} from './components/home/TB'
import { Results } from './components/results/Results'
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom'
import Covid from './components/covid/Covid'
import Cancer from './components/cancer/Cancer'
import Landing from './components/Landing/Landing'



const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path='/TB' element = {TB}/>
            <Route path='/cancer' element = {<Cancer/>}/>
            <Route path='/covid' element = {<Covid/>}/>
            <Route path="/results" element={<Results/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
    </BrowserRouter>
  )
}

export default App;