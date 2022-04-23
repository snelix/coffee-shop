import {Component} from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../header/header';
import Footer from '../footer/footer';

import Homepage from '../../pages/homepage';
import Catalogpage from '../../pages/catalogpage';
import Cardpage from '../../pages/cardpage';
import Pleasurepage from '../../pages/pleasurepage';


import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      filter: ''
    }
    this.fullCatalog = [
      {id: 1, img:require('../../img/product-3.jpg'), fullImg: require('../../img/about-it.png'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',  name: 'AROMISTICO Coffee 1 kg', from: 'Brazil', price: '6.99', best: true},
      {id: 2, img:require('../../img/product-1.jpg'), fullImg: require('../../img/product-1.jpg'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Solimo Coffee Beans 2 kg', from: 'Kenya', price: '10.73', best: true},
      {id: 3, img:require('../../img/product-3.jpg'), fullImg: require('../../img/about-it.png'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Manhattan Coffee 1 kg', from: 'Columbia', price: '5.99', best: true},
      {id: 4, img:require('../../img/product-2.jpg'), fullImg: require('../../img/product-2.jpg'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'Presto Coffee Beans 1 kg', from: 'Brazil', price: '15.99', best: false},
      {id: 5, img:require('../../img/product-3.jpg'), fullImg: require('../../img/about-it.png'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'The Lovely Bean 1 kg', from: 'Brazil', price: '6.99', best: false},
      {id: 6, img:require('../../img/product-3.jpg'), fullImg: require('../../img/about-it.png'), descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', name: 'But First Coffee 1 kg', from: 'Brazil', price: '7.99', best: true}
    ];
  }
  onUpdateSearch = (term) => {
    this.setState({term});
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
  }

  filterPost = (items, filter) => {
    if (filter) {
      const data = items.filter(item => item.from === filter);
      return data;
    } else {
      return items
    }
  }

  onFilterSelect = (filter) => {
      this.setState({filter});
  }


  render() {
    const visibleData = this.filterPost(this.searchEmp(this.fullCatalog, this.state.term), this.state.filter);
    const dataBestProduct = this.fullCatalog.filter(item => item.best);
    const {filter, term} = this.state;
    return (
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<Homepage data={dataBestProduct}/>} />
          <Route path='/catalog' element={<Catalogpage filter={filter} onFilterSelect={this.onFilterSelect} term={term} data={visibleData} btns={this.fullCatalog} onUpdateSearch={this.onUpdateSearch}/>} />
          <Route path={'/catalog/cards/:id'} element={<Cardpage data={this.fullCatalog} />} />
          <Route path={'/best/cards/:id'} element={<Cardpage data={dataBestProduct} />} />
          <Route path='/pleasure' element={<Pleasurepage data={this.fullCatalog}/>} />
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default App;
