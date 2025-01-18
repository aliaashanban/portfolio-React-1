import React from 'react'
import style from '../Portfolio/Portfolio.module.css'
import img1 from '../../assets/images/poert1.png'
import img2 from '../../assets/images/port2.png'
import img3 from '../../assets/images/port3.png'
export default function Portfolio() {
  return <>
  <div className='bg-white' >
  <h3 className=' h1 text-uppercase pt-3'>portfolio component</h3>
    <div className=" d-flex justify-content-center align-items-center">
        <span className="line"></span>
       <i className='fas fa-star  '></i>
        <span className="line"></span>
      </div>
    <div className='container w-75 mb-5 '>
        <div className='row '>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img1} className= ' w-100 rounded-3 img-fluid '  />
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img2} className= ' w-100 rounded-3 img-fluid '/>
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal2"></i>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img3} className= ' w-100 rounded-3 img-fluid '/>
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img3} className= ' w-100 rounded-3 img-fluid '/>
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal3"></i>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img1} className= {`${style.image} w-100 rounded-3 img-fluid  `}  />
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </div>
            </div>
        </div>
        <div className='col-lg-4'>
        <div className='picture position-relative'>
        <picture>
        <img src={img3} className= ' w-100 rounded-3 img-fluid'/>
        </picture>
        <div className={`${style.icon}  bg-opacity-25  d-flex justify-content-center align-items-center position-absolute start-0 end-0 top-0 button-0   rounded-3`}>
                  <i class="fa-solid fa-plus fw-bold display-1 text-light " data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
                </div>
            </div>
        </div>
        </div>
        </div>

        <>{ /* Button trigger modal */ }


{ /* Modal */ }
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img1} className='w-100'></img>

    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img2} className='w-100'></img>

    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img3} className='w-100'></img>

    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img3} className='w-100'></img>

    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img1} className='w-100'></img>

    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered ">
      <div className="modal-body">
      <img src={img2} className='w-100'></img>

    </div>
  </div>
</div>
  
  </>
  
  



{/* <div className="modal fade" id="exampleModal1" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img1} className= ' w-100 '/>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img2} className= ' w-100 '/>
      </div>
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-body">
        <img src={img3} className= ' w-100 '/>
      </div>
    </div>
  </div>
</div> */}

  </div>
  </>
}
