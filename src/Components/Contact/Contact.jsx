import React from 'react'
import style from'./Contact.module.css'

export default function Contact() {
  return (
    <div className='bg-white'>
     <h3 className=' h1 text-uppercase pt-5 '>Conatct Section </h3>
    <div className=" d-flex justify-content-center align-items-center pb-4">
        <span className="line"></span>
       <i className='fas fa-star  '></i>
        <span className="line"></span>
      </div>
    <form className='container w-50'>
      <input className='form-control' placeholder='Enter Your Name...'></input>
      <label></label>
      <input className='form-control' placeholder='Enter Your Age...'></input>
      <label></label>
      <input className='form-control' placeholder='Enter Your Email...'></input>
      <label></label>
      <input className='form-control' placeholder='Enter Your Password...'></input>
      <label></label>
      <input className='form-control' placeholder='Enter Your University...'></input>
      <label></label>
      
      <button className={`${style.butn} d-inline mt-4 mb-3 px-3  `}>Submit</button>
      
    </form>

    </div>
  )
}
