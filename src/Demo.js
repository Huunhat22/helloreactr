import './App.css';
import Header from './component/Header';
import { Component } from 'react';
import Product from './component/Poduct';
import Excercise from './component/excercise';

class Demo extends Component{
  render(){
    return (
      <div className="Demo">
        <Header></Header>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <Product/>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6">
            <Product/>
          </div>
        </div>
        <Excercise></Excercise>
      </div>
    );
  }
}

export default Demo;
