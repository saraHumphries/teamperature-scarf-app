import { useState, useEffect } from "react";


const DateTemp = ({date}) => {

    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchApiData(date);
    }, []);

    const fetchApiData = (date) => {
        fetch(`https://api.weatherapi.com/v1/history.json?key=dbdf40f685a9446e9c3144301220501&q&q=Edinburgh&dt=${date}`)
        .then(result => result.json())
        .then(res => setWeatherData(res));
     };

    return (
        <div>
            { weatherData?
                <div className="row">
                    <div className="col-2"><img className='img-thumbnail' src={weatherData.forecast.forecastday[0].day.condition.icon}></img></div>
                    
                        <p className="col-5 my-auto">{date}</p>
                        <p className="col-4 my-auto">{weatherData.forecast.forecastday[0].hour[12].temp_c} &#8451; </p>
                        <input className="col-1 my-auto" type='checkbox' id="knitted"></input>
                    
                </div>
            : null}
        </div>
    );
};

export default DateTemp;