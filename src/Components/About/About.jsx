import React from 'react'
import '../Home/Home.module.css'
import '../About/About.module.css'

export default function About() {
  return <>
  <div className='overflow-auto'>
  <h2 className=' h1 text-uppercase mt-1'>about component</h2>
    <div className=" d-flex justify-content-center align-items-center  mb-5">
        <span className="line"></span>
       <i className='fas fa-star  '></i>
        <span className="line"></span>
      </div>
  </div>
      <div className='container pb-5 '>
      <div className='row '>
        <div className='col-lg-6 '>
            <h6>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h6>     
        </div>
        <div className='col-lg-6 '>
        <h6>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h6>
        </div>
      </div>
      </div>
   
    
  </>
}
