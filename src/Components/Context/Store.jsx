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
      'X-RapidAPI-Key':process.env.REACT_APP_RAPIDAPI_KEY,
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
