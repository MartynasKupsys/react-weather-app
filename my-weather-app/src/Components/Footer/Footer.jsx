import './Footer.scss';

const Footer = ({ speed, humidity, pressure }) => (
    <div className="footer">
        <div className="footer-wind">

            <svg style={{ height: '30px', width: '30px' }}>
                <use xlinkHref="#wind" />
            </svg>
            <div className="footer-wind-data">
                {speed.toFixed(0)}
                {' '}
                m/s
            </div>
        </div>
        <div className="footer-humidity">

            <svg style={{ height: '30px', width: '30px' }}>
                <use xlinkHref="#drop" />
            </svg>
            <div className="footer-humidity-data">
                {humidity}
                {' '}
                %
            </div>
        </div>
        <div className="footer-pressure">

            <svg style={{ height: '30px', width: '30px' }}>
                <use xlinkHref="#barometer" />
            </svg>
            <div className="footer-pressure-data">
                {pressure}
                {' '}
                hPa
            </div>
        </div>

    </div>

);

export default Footer;
