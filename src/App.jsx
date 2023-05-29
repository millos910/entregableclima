import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import getApiKey from './utils/getApiKey'
import { WeatherCard } from './components/WeatherCard'
import Load from './components/Load'
function App() {
  const [coords,setcoords]=useState()
  const [weather,setweather]=useState()
  const [temp,settemp]=useState()
  useEffect(()=>{
  const succes=(pos)=>{
    const obj={
      lat: pos.coords.latitude,lon:pos.coords.longitude
    }
    setcoords(obj)
  }
  navigator.geolocation.getCurrentPosition(succes)//succes=funcion call back y es asincronica
  },[]) 

  useEffect (()=>{
    if(coords !== undefined){
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${getApiKey()}`
      axios.get(url)
        .then(res => {
          setweather(res.data)
          const objTemp={
            celsius:+(res.data.main.temp-273.15).toFixed(1),
            farenheit:+((res.data.main.temp-273.15)*(9/15)+32).toFixed(1)
          }
          settemp(objTemp)
        
        })
        .catch(err => console.log(err))
    }
  },[coords])
  console.log(temp);
  return (
    <div className='app'>
      {weather?
      <WeatherCard weather={weather} temp={temp}/>
      :<Load/>}
    </div>
  )
}

export default App
