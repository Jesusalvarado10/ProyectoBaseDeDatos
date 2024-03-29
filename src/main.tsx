import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {  homeURL } from './Constant/url.ts'
import { Home } from './Page/Home.tsx'
import { Layout } from './Components/Layout/layout.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<BrowserRouter>
        <Routes >
        <Route element = {<Layout />}>
        <Route path = {homeURL}element = {<Home />}></Route> 
        <Route path='/' element={<Navigate to={homeURL} />}>
        </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
