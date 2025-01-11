import React from 'react'
import '../Footer/Footer.module.css'

export default function Footer() {
  return <>
  <footer >
  <div className='container pt-4'>
    <div className='row'>
    <div className='col-lg-4'>
        <h3 className='text-text-uppercase'>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
    </div>
    <div className='col-lg-4'>
    <h3 className='ms-5'>  AROUND THE WEB </h3>
    <div className="d-flex justify-content-center align-items-center gap-3 mt-4 me-5">
  <div className="rounded-circle border border-success d-flex justify-content-center align-items-center"
    style={{ width: "35px", height: "35px" }}>
    <i className="fas fa-home text-success"></i>
  </div>
  <div className="rounded-circle border border-primary d-flex justify-content-center align-items-center "
    style={{ width: "35px", height: "35px" }}>
    <i className="fas fa-user text-primary"></i>
  </div>
  <div className="rounded-circle border border-danger d-flex justify-content-center align-items-center"
    style={{ width: "35px", height: "35px" }}>
    <i className="fas fa-envelope text-danger"></i>
  </div>
  <div className="rounded-circle border border-warning d-flex justify-content-center align-items-center"
    style={{ width: "35px", height: "35px" }}>
    <i className="fas fa-cog text-warning"></i>
  </div>
</div>
</div>
    <div className='col-lg-4'>
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
    </div>
    </div>
    <div className='bg-success bg-opacity-75 text-center'>
    <h4 className='pt-4 pb-4' > Ctreated By Aliaa Shaban</h4>
   </div> 
  </footer>
 
</>  
    }
