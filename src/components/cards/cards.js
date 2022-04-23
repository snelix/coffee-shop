import {Link} from 'react-router-dom'

import './cards.css';

const Cards = (props) => {
    const {id, img, name, from, price, link} = props;
    return (
        <Link to={link + id} className="card">
            <div className="card__img">
                <img src={img} alt="Solimo Coffee Beans" />
            </div>
            <div className="card__info">
                <div className="card__name">{name}</div>
                <div className="card__from">{from}</div>
                <div className="card__price">{price}$</div>
            </div>
        </Link>
    );
}

export default Cards;