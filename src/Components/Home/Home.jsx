import React, { useEffect} from 'react'
import styles from './Home.module.scss'
import { Link, useNavigate } from 'react-router-dom';
import { Offline } from 'react-detect-offline';
import Disconnect from './../Disconnect/Disconnect';
import { useContext } from 'react';
import { dataContext } from './../Context/Store';
import Loading from '../Loading/Loading';
export default function Home() {
  let navigate=useNavigate()
  let {getgames,getGames,loading}=useContext(dataContext)
  useEffect(() => {
    getGames("https://free-to-play-games-database.p.rapidapi.com/api/games?sort-by='popularity")
  }, [])
    let goToBrowser=()=>{
      navigate('./browser')
    } 
  return (
    <>
    <Offline><Disconnect/></Offline>
  <div className="home">
    <div className="text text-center my-5">
      <h2>Find & track the best <span className='text-info'>free-to-play</span> games!</h2>
    <p className='text-muted fs-5'>Track what you've played and search for what to play next! Plus get free premium loot!</p>
      <button className='btn btn-outline-light' onClick={goToBrowser}>Browse game</button>
    </div>
    {/*  */}
    <div className="row my-1 py-2 g-4">
        {getgames.slice(0,3).map((game,index)=>
          <div className="col-md-4 overflow-hidden" key={index}>
      <Link to={`/details/${getgames[index].id}`} className='nav-link'>
      <div className={`${styles.box} shadow rounded-2`}>
        <img src={getgames[index].thumbnail} alt="" className='w-100'/>
        <div className="d-flex justify-content-between align-items-center p-2">
        <h3 className='fs-6 my-0'>{getgames[index].title}</h3>
        <span className='btn btn-info text-white'>Free</span>
        </div>
        <p className='   mb-2 p-2 pb-1'>{getgames[index].short_description.split(' ').splice(0,5).join(' ')}...</p>
        <div className="d-flex flex-wrap  justify-content-between align-items-center p-2 mb-2">
        <div className=' w-100 d-flex justify-content-between'>
          <span className={`p-1 mx-1 rounded-4  ${styles.spanbg}`}>{getgames[index].genre}</span>
          <span className={`p-1 rounded-4  ${styles.spanbg}`}>{getgames[index].platform}</span>
        </div>
        </div>
          </div>
      </Link>
        </div>
        )}
      </div>
    </div>
    {loading ===true?<Loading/>:null}
    </>
  )
}
