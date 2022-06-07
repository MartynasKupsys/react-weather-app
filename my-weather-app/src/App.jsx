import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Container from './Components/Container';
import './App.scss';

const App = () => {
    const [weather, setWeather] = useState({});
    const [isData, setIsData] = useState(false);
    const [selectCity, setSelectCity] = useState('');
    const [getCity, setGetCity] = useState('');
    const defaultCity = useRef('Vilnius');
    const [message, setMessage] = useState('');

    const submitHandler = () => {
        if (!selectCity) {
            setMessage('Please enter city');
        } else {
            setGetCity(selectCity);
            setSelectCity('');
            setMessage('');
        }
    };

    useEffect(() => {
        if (localStorage.getItem('city') === null) {
            localStorage.setItem('city', defaultCity.current);
        }
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem('city')}&appid=2a908fec36d7aecec138ac20f6052e16&units=metric`)
            .then((response) => {
                setWeather((p) => response.data);
                setIsData(true);
            });
    }, []);

    useEffect(() => {
        if (!getCity) {
            return;
        }
        // axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`)
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&appid=2a908fec36d7aecec138ac20f6052e16&units=metric`)
            .then((response) => {
                setWeather((p) => response.data);
                setIsData(true);
                localStorage.clear();
                localStorage.setItem('city', getCity);
            }).catch((response) => {
                setMessage(response.response.data.message.charAt(0).toUpperCase() + response.response.data.message.slice(1));
            });
    }, [getCity]);

    return (

        <div className="app-container">
            <div className="form">
                {/* <span className="form-label">Enter your city: </span> */}
                <input className="form-input" onChange={(e) => setSelectCity(e.target.value)} value={selectCity} placeholder="Enter your city..." />
                <button className="form-submit" onClick={submitHandler}>Submit</button>
            </div>
            {isData ? (<Container data={weather} message={message} />) : null}
        </div>

    );
};

export default App;
