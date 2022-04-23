import Cards from '../cards/cards';

import './best-product.css';

const BestProduct = ({data}) => {
    const elements = data.map(item => {
        return (
            <Cards 
                key={item.id}
                id={item.id}
                img={item.img}
                name={item.name}
                from={item.from}
                price={item.price}
                link={'/coffee-shop/best/cards/'}
            />
        )
    });

    return (
        <div className="best-product">
            <div className="best-product__wrapper">
                <div className="best-product__title">Our best</div>
                <div className="best-product__cards">
                    {elements}
                </div>
            </div>
        </div>
    );
}

export default BestProduct;