import { useState } from "react"
import './styles/wheatherCard.css'
export const WeatherCard = ({weather, temp}) => {
    const [isCelsius,setisCelsius]=useState(true)
    const handleChangeTemp=()=>{
        setisCelsius(!isCelsius)
    }
  return (
    <article className="Weather">
        <header className="Weather__header">
            <h1 className="Weather__title">Weather App</h1>
            <h2 className="Weather__subtitle">{weather?.name},{weather?.sys.country}</h2>
        </header>
        <section className="Weather__body">
            <div className="img__continer">
                <img src={weather ? `https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`:''}alt="condicion climatica" />
            </div>
            <div className="Weather__info">
                <h3 className="Weather__info-title">"{weather?.weather[0].description}"</h3>
                <ul className="Weather__info-list">
                    <li className="Weather__list-item"><span className="Weather__list-label">Winds Speed: </span><span className="Weather__list-value">{weather?.wind.speed} %</span></li>
                    <li className="Weather__list-item"><span className="Weather__list-label">clouds: </span><span className="Weather__list-value">{weather?.clouds.all} m/s</span></li>
                    <li className="Weather__list-item"><span className="Weather__list-label">pressure: </span><span className="Weather__list-value">{weather?.main.pressure} hPa</span></li>
                </ul>
            </div>
        </section>
        <aside>
            <h2 className="temp">{isCelsius ? `${temp?.celsius} °C`: `${temp?.farenheit}°F`}</h2>
            <button className="btn" onClick={handleChangeTemp}>change to {isCelsius?'°F':'°C'}</button>
        </aside>
        
        
    </article>
    
  )
}
