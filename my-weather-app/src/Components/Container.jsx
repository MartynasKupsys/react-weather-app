import './Container.scss';
import Body from './Body/Body';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Container = ({ data }) => (
    (
        <div className="container">
            <Header city={data.name} country={data.sys} />
            <Body weather={data.weather} temperature={data.main} />
            <Footer speed={data.wind.speed} humidity={data.main.humidity} pressure={data.main.pressure} />
        </div>
    )

);

export default Container;
