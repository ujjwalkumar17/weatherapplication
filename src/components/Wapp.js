import React, {useEffect, useState} from "react";
import "./css/style.css";

const Wapp = () => {

    const [city, setCity, set] = useState(null);
    const [search, setSearch] = useState("Patna");

    useEffect( ()=>{
        const fetchApi = async ()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=83e4b8464e2170825d8d352b10367625`
            const response =await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )

    return(
        <>
             <div className="box">
                <div className="inputData">
                    <input type="search" className="inputfield" id="textField" onChange={ (event)=>{ setSearch(event.target.value) }
                    }/>
                </div>

            {!city ? (
                <p> No Data Found</p>
            ) : (
                <div>
                    <div className="info">
                    <h2 className="location">
                        <i className="fas fa-street-view"></i>{search}
                    </h2>
                    <h1 className="temp">
                        {city.temp} °C
                    </h1>
                    <h3 className="tempmin_max"> Min : {city.temp_min} °C | {city.temp_max} °C</h3>
                    <h3 className="tempmin_max"> Feels like : {city.feels_like} °C</h3>
                    <h3 className="tempmin_max"> Humidity : {city.humidity}</h3>
                </div>
                <div className="wave -one"></div>
                <div className="wave -two"></div>
                <div className="wave -three"></div>
                
                </div>
            )}

            </div>
            <footer>
                <h6 className="tempmin_max">Made with love by Ujjwal Kumar</h6>
            </footer>
        </>
    )
}

export default Wapp;