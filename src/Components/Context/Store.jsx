import axios from "axios";
import { useState } from "react";
import { createContext } from "react";

export let dataContext=createContext(null)

export default function DataContextprovider({children}){
let [getgames,setgetGames]=useState([])
let [numberOfGames,setnumberOfGames]=useState(20)
let [loading,setLoading]=useState(false)

// getData
let getGames=async(url)=>{
  setLoading(true)
  let {data}=await axios.get(url,{
    headers: {
      'X-RapidAPI-Key': '3db15bfa4cmshd52830e7c24571bp18870djsne4d7db060157',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  })
  setgetGames(data)
  setLoading(false)
}
// see more and less
let seeMore=()=>{
  setnumberOfGames(numberOfGames+20)
}
let seeLess=()=>{
  if(numberOfGames!==20){
  setnumberOfGames(numberOfGames - 20)
  }
}


return <dataContext.Provider value={{getgames,getGames,seeMore,numberOfGames,seeLess,loading}}>
{children}
</dataContext.Provider>
}
