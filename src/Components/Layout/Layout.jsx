import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>
    <Navbar/>
    <div className='bg-success bg-opacity-75 text-center '>
    <Outlet></Outlet>

    </div>
    <Footer/>
  </>
}
