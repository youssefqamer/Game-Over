import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import img from '../../imgs/logo.png'
import styles from './Navbar.module.scss'

export default function Navbar({userdata,logout}) {
  return (
    <>
<nav className={`navbar navbar-expand-lg shadow ${styles.navlink}`}>
  <div className="container">
    <img src={img} alt="" className={styles.imgwidth}/>
    <a className={`navbar-brand ${styles.navcolor}`}  >Game Over</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    {userdata? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
               <NavLink className={({isActive})=>{
                return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to=''>Home
                </NavLink>  
        </li>
        <li className="nav-item">
          <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='all'>All
                 </NavLink>  
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Platform
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
            <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='pc'>Pc
                 </NavLink>  
            </li>
            <li>
            <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='browser'>browser
                 </NavLink>  
            </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          sort by
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
            <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='release-Date'>release-date
                 </NavLink>  
            </li>
            <li>
            <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='popularuty'>popularuty
                 </NavLink> 
            </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='alphabetical'>alphabetical
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='relevance'>relevance
                 </NavLink> 
              </li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${styles.navcolor}`}  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Categories
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='racing'>racing
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='sports'>sports
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='social'>social
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='shooter'>shooter
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='zombie'>zombie
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='open-world'>open-world
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='fantasy'>fantasy
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='action-rpg'>action-rpg
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='action'>action
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='flight'>flight
                 </NavLink> 
              </li>
            <li>
              <NavLink className={({isActive})=>{
                 return isActive?'text-info nav-link' :`${styles.navcolor} nav-link `}} to='battle-royale'>battle-royale
                 </NavLink> 
              </li>
           
          </ul>
        </li>
      </ul>:''}
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {userdata?<li className="nav-item"><Link className="btn  btn-outline-info text-white nav-link mx-1" to='login' onClick={logout}>Logout</Link>
        </li>:<>
        <li className="nav-item">
          <NavLink className={({isActive})=>{
                return isActive?'text-info nav-link  mx-1 fs-5 ' :`${styles.navcolor} nav-link fs-5`}} to='login'>Login
                </NavLink>  
       
        </li>
        <li className="nav-item ">
          <NavLink className={({isActive})=>{
                return isActive?'text-info nav-link  mx-1 fs-5' :`${styles.navcolor} nav-link fs-5`}} to='joinfree'>join free
                </NavLink>  
        </li>
        </>}
        
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

