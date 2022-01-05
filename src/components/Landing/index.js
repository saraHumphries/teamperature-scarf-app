import {} from 'react-bootstrap';

const LandingPage = ({weatherData}) => {
    return (
        <div className='container'>
            <p>The temperature in {weatherData.location.name} on {weatherData.forecast.forecastday[0].date} at {weatherData.forecast.forecastday[0].hour[12].time} was {weatherData.forecast.forecastday[0].hour[12].temp_c} degrees C </p>
            {/* <p>The temperature at {weatherData.forecast.forecastday.hour[12].time} was</p> */}
        </div>
    )
};

export default LandingPage;