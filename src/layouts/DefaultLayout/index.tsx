import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/index'
import { LayoutContainer } from './styles'




const DefaultLayout: React.FC = () => {
  return (
    <div>
      <LayoutContainer>
      <Header />
      <Outlet />
      </LayoutContainer>
    </div>
  )
}

export default DefaultLayout
