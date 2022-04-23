import { Component } from 'react';
import Cards from '../cards/cards';

import './catalog.css'

class Catalog extends Component {
    

    innerTag = () => {
        return (
            <div className="catalog__nothing">Ничего не найдено!</div>
        )
    }
    render () {
        let elements = this.props.data.map(item => {
            return (
                <Cards
                    key={item.id}
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    from={item.from}
                    price={item.price}
                    link={'/catalog/cards/'}
                />  
            );
        });
        return (
            <div className="catalog">
                <div className="catalog__wrapper">
                    {elements.length !== 0 ? elements : this.innerTag()}
                </div>
            </div>
        );
    }
}

export default Catalog;