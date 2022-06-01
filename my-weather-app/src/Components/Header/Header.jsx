import './Header.scss';

const Header = ({ city, country }) => (
    <div className="header">
        Weather in
        {' '}
        <span>
            {city}
        </span>
        ,
        {' '}
        {country.country}
    </div>
);
export default Header;
