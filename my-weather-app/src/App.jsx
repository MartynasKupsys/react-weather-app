import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import Container from './Components/Container';
import './App.scss';

const App = () => {
    const [weather, setWeather] = useState({});
    const [isData, setIsData] = useState(false);
    const [city, setCity] = useState('');
    const defaultCity = useRef('Vilnius');

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity.current}&appid=2a908fec36d7aecec138ac20f6052e16&units=metric`)
            .then((response) => {
                setWeather((p) => response.data);
                setIsData(true);
            });
    }, []);

    useEffect(() => {
        if (!city) return;
        defaultCity.current = city;
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${defaultCity.current}&appid=2a908fec36d7aecec138ac20f6052e16&units=metric`)
            .then((response) => {
                setWeather((p) => response.data);
                setIsData(true);
            }).catch((response) => response.response.data.message);
    }, [city]);

    return (
        isData ? (
            <div className="app-container">
                <input onChange={(e) => setCity(e.target.value)} value={city} />
                {/* <button onClick={() => }></button> */}
                <Container data={weather} />
            </div>
        ) : null
    );
};

export default App;
