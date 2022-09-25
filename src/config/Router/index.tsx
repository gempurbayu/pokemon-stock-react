import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home }  from '../../pages'
import DetailPokemon from '../../pages/DetailPokemon'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}>
            </Route>
            <Route path='/pokemon/:id' element={<DetailPokemon/>}>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router