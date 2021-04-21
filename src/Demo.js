// import './App.css';
import './css/style.css'
import Header from './component/Header';
import { Component } from 'react';
import Product from './component/Poduct';
import Excercise from './component/excercise';
import Props from './component/Props';

class Demo extends Component{
  render(){

    // tao 1 mang chua nhieu doi tuong - Thực hành Props
    var mobileList = [
      {
          id : "1",
          mobilename : "Iphone 12 Promax",
          mobileprice : 28000000,
          Image: "https://cdn.nguyenkimmall.com/images/detailed/698/10047705-dien-thoai-iphone-12-128gb-do-1.jpg",
          status : true
      },
      {
          id : "2",
          mobilename : "Iphone 11 Promax",
          mobileprice : 18000000,
          Image: "https://cdn.nguyenkimmall.com/images/detailed/698/10047705-dien-thoai-iphone-12-128gb-do-1.jpg",
          status : false
      },
      {
          id : "3",
          mobilename : "Iphone 8 Plus",
          mobileprice : 80000000,
          Image: "https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-hh-600x600-600x600.jpg",
          status : true
      },
      {
          id : "4",
          mobilename : "Iphone 7 Plus",
          mobileprice : 50000000,
          Image: "https://cdn.nguyenkimmall.com/images/detailed/698/10047705-dien-thoai-iphone-12-128gb-do-1.jpg",
          status : false
      },
  ];
  
  
  var elements = mobileList.map((Item,index) =>{
    let result ="";
    if (Item.status) {
      result = <Props 
                key = {Item.id}
                Name ={Item.mobilename}
                Price = {Item.mobileprice}
                Buy ="Buy Now"
                Image= {Item.Image}
              />
    }
      return result;
  })

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

        <h1>Thực hành về Props</h1>
        
        <div className="container">
              <div className="row">
                {elements}
              </div>
        </div>
      </div>
    );
  }
}

export default Demo;
