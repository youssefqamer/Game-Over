import React from 'react'
import img from '../../imgs/404-error-page-not-found.jpg'
export default function NotFound() {
  return (
   <>
   <div className=' d-flex justify-content-center align-items-center  mt-5 py-5 '>
    <img src={img} alt="Page Not Found" className='w-50'/>
   </div>
   
   </>
  )
}
