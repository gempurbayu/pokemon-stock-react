import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home }  from '../../pages'
import ConfirmationUpdate from '../../pages/ConfirmationUpdate'
import DetailPokemon from '../../pages/DetailPokemon'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/pokemon/:id' element={<DetailPokemon/>}>
            </Route>
            <Route path='/confirmation' element={<ConfirmationUpdate/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router