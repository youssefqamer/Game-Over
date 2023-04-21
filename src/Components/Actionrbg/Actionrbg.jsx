
import React, { useContext, useEffect} from 'react'
import styles from './Actionrbg.module.scss'
import { Link } from 'react-router-dom';
import { dataContext } from './../Context/Store';
import { Offline } from 'react-detect-offline';
import Disconnect from './../Disconnect/Disconnect';
import Loading from '../Loading/Loading';

export default function Actionrbg() {
  let {getgames,getGames,seeMore,seeLess,numberOfGames,loading}=useContext(dataContext)
  useEffect(() => {
    getGames("https://free-to-play-games-database.p.rapidapi.com/api/games?category=action-rpg")
  
  }, [])
  return (
    <>
        <Offline><Disconnect/></Offline>

        <div className="row my-1 py-2 g-4">
        {getgames.slice(0,numberOfGames).map((game,index)=>
          <div className="col-md-3 overflow-hidden" key={index}>
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
         {getgames.length>20? <div className='d-flex justify-content-between flex-wrap mb-3'>
    <button className='btn btn-danger'onClick={seeLess}>See Less</button>
    <button className='btn btn-success'onClick={seeMore}>See More</button>
    </div>:''}
      </div>
     
      {loading === true?<Loading/>:null}
    
    </>
  )
}