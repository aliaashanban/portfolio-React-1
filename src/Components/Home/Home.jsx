import React from 'react'
import homeImg from '../../assets/images/avataaars.svg'
import '../Home/Home.module.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  return <>
    <img src={homeImg} className='homeImg'/>
    <h1 className='pt-3 text-uppercase'>start Framework</h1>
    <div className=" d-flex justify-content-center align-items-center mb-4">
        <span className="line"></span>
       <i className='fas fa-star '></i>
        <span className="line"></span>
      </div>
    <h4 >Graphic Artist - Web Designer - Illustrator</h4>
  </>
}
