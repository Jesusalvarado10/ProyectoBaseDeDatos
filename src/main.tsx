import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {  homeURL, loginURL } from './Constant/url.ts'
import { Home } from './Page/Home/Home.tsx'
import { Layout } from './Components/Layout/layout.tsx'
import { Login } from './Page/Login/login.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
<BrowserRouter>
        <Routes >
        <Route element = {<Layout />}>
        <Route path = {homeURL}element = {<Home />}></Route> 
        <Route path = {loginURL}element = {<Login />}></Route>
        <Route path='/' element={<Navigate to={homeURL} />}>
        </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
