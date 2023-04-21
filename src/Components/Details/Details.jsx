import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Offline } from 'react-detect-offline';
import Disconnect from './../Disconnect/Disconnect';
import Loading from '../Loading/Loading';
export default function Details() {
    let parms=useParams()
    let [getgames,setgetgames]=useState([])
    let [loading,setLoading]=useState(false)
let getGames=async()=>{
        setLoading(true)
        let {data}=await axios.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${parms.id}`,{
          headers: {
            'X-RapidAPI-Key': '3db15bfa4cmshd52830e7c24571bp18870djsne4d7db060157',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
          }
        })
        setgetgames(data)
        setLoading(false)
      }
useEffect(() => {
getGames()
}, [])
// 
  
  return (
    <>
        <Offline><Disconnect/></Offline>

    <div className="details ">
    <div className="row mt-5">
       <div className="col-md-3 mb-3">
      <div className='rounded-3 shadow'>
      <img src={getgames.thumbnail} alt="" className='w-100 rounded-3'/>
        <div className="d-flex justify-content-between align-items-center flex-wrap py-3">
            <span className='btn btn-info text-white mb-2'>Free</span>
            <a href={getgames.freetogame_profile_url} target='-blank' className='btn btn-info text-white' >Play Now</a>
        </div>
      </div>
       </div>
       <div className="col-md-9 px-2">
        <h2>{getgames.title}</h2>
        <p className='fw-bolder'>About {getgames.title}</p>
        <p>{getgames.description}</p>
        <h5>Minimum System Requirements</h5>
        <div className="px-2">
    {getgames.minimum_system_requirements?<p className='fw-bold'>graphics :{getgames.minimum_system_requirements.graphics}</p>:''}
    {getgames.minimum_system_requirements?<p className='fw-bold'>memory :{getgames.minimum_system_requirements.memory}</p>:''}
    {getgames.minimum_system_requirements?<p className='fw-bold'>os  :{getgames.minimum_system_requirements.os}</p>:''}
    {getgames.minimum_system_requirements?<p className='fw-bold'>processor  :{getgames.minimum_system_requirements.processor}</p>:''}
    {getgames.minimum_system_requirements?<p className='fw-bold'>storage  :{getgames.minimum_system_requirements.storage}</p>:''}
</div>
<h4>{getgames.title} Screenshots</h4>
<div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    {getgames.screenshots?.map((shot,index)=>{
 return  <div className="carousel-item active" key={index}>
 <img src={shot.image} className="d-block w-100" alt="" />
</div> 
 })}
 
 </div> 
 </div>
<h2>Additional Information</h2>
    </div>
    </div>
    <div className="row">
        <div className="col-md-3 "></div>
        <div className="col-md-9 ">
            <div className="row ">
        <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Title</p>
            <p className='mt-0 pt-0'>{getgames.title}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Developer</p>
            <p className='mt-0 pt-0'>{getgames.developer}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Publisher</p>
            <p className='mt-0 pt-0'>{getgames.publisher}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Release Date</p>
            <p className='mt-0 pt-0'>{getgames.release_date}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Genre</p>
            <p className='mt-0 pt-0'>{getgames.genre}</p>
        </div>
    </div>
    <div className=" col-md-4 ">
        <div>
            <p className='mb-0 pb-0'>Platform</p>
            <p className='mt-0 pt-0'>{getgames.platform}</p>
        </div>
        </div>
        </div>
    </div>
</div>
    </div>
    {loading === true?<Loading/>:null}
    </>
  )
}
