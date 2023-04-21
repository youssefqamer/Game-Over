import React, { useState } from 'react'
import img from '../../imgs/gaming.ebaf2ffc84f4451d.jpg'
import styles from './Register.module.scss'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import joi from 'joi';
export default function Register() {
  let [errorMsg,seterrorMsg]=useState('')
  let [errorList,seterrorList]=useState([])
  let [isLoading,setIsLoading]=useState(false)
  let navigate=useNavigate()
  let [user,setuser]=useState({
    'first_name':'',
    'last_name':'',
    'email':'',
    'age':'',
    'password':'',
})
  let getInputvalue=(e)=>{
   let myuser={...user}
   myuser[e.target.name]=e.target.value
    setuser(myuser)
  }
  let submitData= async(e)=>{
    e.preventDefault()
    seterrorMsg('')
    seterrorList('')
    setIsLoading(true)
    let validateresponse=validateData()
    if(validateresponse.error){
      seterrorList(validateresponse.error.details)
    }else{
      let {data}=await axios.post('https://sticky-note-fe.vercel.app/signup',user)
      setIsLoading(false)
        if(data.message==='success'){
          goToLogin()
        }else{
          seterrorMsg(data.message)
          showErrors()
        }
    }
    }
  let goToLogin=()=>{
    navigate('/login')
  }
  let validateData=()=>{
    const schema=joi.object({
      first_name:joi.string().alphanum().required().min(2).max(10),
      last_name:joi.string().alphanum().required().min(2).max(10),
      email:joi.string().required().email({tlds:{allow:['com','net']}}),
      age:joi.number().min(16).max(100).required(),
      password:joi.string().min(6).max(15).required().pattern(new RegExp(/([a-z]|[A-Z])/))
    })
    return schema.validate(user,{abortEarly:false})
  }
  let showErrors=(inputName)=>{
    let errors=errorList.filter((error)=>{return error.message.includes(inputName)})
  if (errors[0]!==undefined&&errors[0].message.includes('password')) {
    return <div className='alert alert-danger py-1'>Password must be 5 numbers and one letter at least</div>
  }
  else if(errors[0]!==undefined){
     return <div className='alert alert-danger py-1'>{errors[0].message}</div>
  }
}

  return (
    <>
    <div className="row my-5 py-5">
      <div className="col-md-6 mb-2 ">
        <div className="img">
          <img src={img} alt="" className='w-100'/>
        </div>
      </div>
      <div className="col-md-6">
        <form onSubmit={submitData} className={`${styles.formcolor} text-center p-2 rounded-2`} >
      <h2>Create My Account!</h2>
     
      {errorMsg?<div className='alert alert-danger '>{errorMsg}</div>:''}
      <input onChange={getInputvalue} type="text" placeholder='First Name' name='first_name' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      {errorList.length>0?showErrors('first_name'):''}
      <input onChange={getInputvalue} type="text" placeholder='Last Name' name='last_name' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      {errorList.length>0?showErrors('last_name'):''}
      <input onChange={getInputvalue} type="email" placeholder='Email Adress' name='email' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      {errorList.length>0?showErrors('email'):''}
      <input onChange={getInputvalue} type="number" placeholder='Age' name='age' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      {errorList.length>0?showErrors('age'):''}
      <input onChange={getInputvalue} type="password" placeholder='password' name='password' className={`form-control mb-2 ${styles.inputbg} border-0`}/>
      {errorList.length>0?showErrors('password'):''}
      <button className={`btn w-100 mb-2 text-center text-white fs-5 ${styles.inputbg} ` + (isLoading&&errorList.length===0?'disabled':'')}>{isLoading&&errorList.length===0?<i className="fa-solid fa-spinner fa-spin"></i>:'Cerate An Account'}</button>

        <p>This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy">Privacy Policy</a> and <a href="https://policies.google.com/terms">Terms of Service</a> apply.</p>
        <hr />
        <p className=''>Already a member? <a onClick={()=>goToLogin()} className='text-info'>login</a></p>
        </form>
      </div>
    </div>
    </>
  )
    }
