import {Link} from 'react-router-dom'
import logo from '../../icons/main-logo.svg'

import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="contaner">
                <div className="header__wrapper">
                    <Link to="/" className="header__logo">
                        <img src={logo} alt="coffee house" className="header__img" />
                        <div className="header__name">Coffee house</div>
                    </Link>
                    <ul className="header__list">
                        <li className="header__item">
                            <Link to="/catalog">Our coffee</Link>
                        </li>
                        <li className="header__item">
                            <Link to="/pleasure">For your pleasure</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Header;