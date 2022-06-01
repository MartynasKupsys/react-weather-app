import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './Components/Container';
import './App.scss';

const App = () => {
    const [weather, setWeather] = useState({});
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=Klaipeda&appid=2a908fec36d7aecec138ac20f6052e16&units=metric')
            .then((response) => {
                setWeather((p) => response.data);
                setIsData(true);
            });
    }, []);

    return (
        isData ? (
            <div className="app-container">
                <Container data={weather} />
            </div>
        ) : null
    );
};

export default App;
