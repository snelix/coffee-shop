import {Link} from 'react-router-dom'


import logo from '../../icons/footer-logo.svg'
import Bean from '../bean/bean';
import './footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <Link to="/coffee-shop" className="footer__logo">
                    <img src={logo} alt="coffee house" className="footer__img" />
                    <div className="footer__name">Coffee house</div>
                </Link>
                <ul className="footer__list">
                    <li className="footer__item">
                        <Link to="/coffee-shop/catalog">Our coffee</Link>
                    </li>
                    <li className="footer__item">
                        <Link to="/coffee-shop/pleasure">For your pleasure</Link>
                    </li>
                </ul>

            </div>
            <Bean/>
        </div>
    );
}

export default Footer;