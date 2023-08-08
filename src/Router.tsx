import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'

import History from './pages/History'
import Home from './pages/Home'

// import { Container } from './styles';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}

export default Router
