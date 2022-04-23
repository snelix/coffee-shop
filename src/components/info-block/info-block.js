import Bean from '../bean/bean';

import './info-block.css'

// import coffeeGirl from '../../img/girl.jpg'

const InfoBlock = (props) => {
    const {title, text, img, alt, from, price} = props;
    let classes = 'info-block__information';
    // let innerTag;
    if (from && price) {
        classes += ' left';
    }

    const aboutInfo = () => {
        return (
            <div className="info-block__text">{text}</div>
        )
    }

    const cardInfo = () => {
        return (
            <div className="info-block__card-info">
                <div className="info-block__country">
                    <span>Country: </span>
                    {from}
                </div>
                <div className="info-block__text">
                    <span>Description: </span>
                    {text}
                </div>
                <div className="info-block__price">
                    <span>Price: </span>
                    {price}$
                </div>
            </div>
        )
    }

    return (
        <div className="info-block">
            <div className="info-block__wrapper">
                <div className="info-block__picture">
                    <img src={img} alt={alt} />
                </div>
                <div className={classes}>
                    <div className="info-block__title">{title}</div>
                    <Bean/>
                    {price ? cardInfo() : aboutInfo()}
                    
                    
                </div>
            </div>
        </div>
    );
}

export default InfoBlock;