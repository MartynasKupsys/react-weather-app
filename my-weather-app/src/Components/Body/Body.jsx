import './Body.scss';

const Body = ({ weather, temperature }) => {
    const timestamp = new Date().getTime();
    const fullDate = new Date(timestamp);
    return (
        <div className="body">

            <div className="body-info">
                <div className="body-weather"><img src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`} alt="" /></div>
                <div className="body-temperature">
                    {temperature.temp}
                    {' '}
                    <span className="body-celcius">
                        <svg style={{ height: '45px', width: '45px' }}>
                            <use xlinkHref="#celcius" />
                        </svg>
                    </span>
                </div>
            </div>

            <div>{weather[0].description}</div>
            <div>
                {fullDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                {' '}
                {fullDate.toLocaleTimeString('sv')}
            </div>

        </div>
    );
};
export default Body;
