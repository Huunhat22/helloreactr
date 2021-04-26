// import './App.css';
import './css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import { Component } from 'react';
import Product from './component/Poduct';
import Excercise from './component/excercise';
import Props from './component/Props';


class Demo extends Component{

  // 1 cách sử dụng của Refs link tham khảo : https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs
  constructor(props){
    super(props);
    this.textInput = null;

    this.setTextInputRef = element =>{
      this.textInput = element;
    }

    this.addToProduct = () =>{
      if (this.textInput) {
        console.log(this.textInput.value);
        // this.textInput.focus();
      }
    };

    // khởi tạo State và quản lý nó
    this.state = {
      productMobile : [
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
            status : true
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
            status : true
        },
      ],
      isActive : true
    };

  }

  componentDidMount(){
    // Autofocus the input on mount
    this.addToProduct();
  }

  //Xử lý sự kiện cho hàm changeValue -> nó là setState
  changeValue = ()=>{
      this.setState({
        isActive : !this.state.isActive
      });
  }

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
  
  // Tạo tham số sử dụng cho Props
  var elements = mobileList.map((Item,index) =>{
    let result ="";
    if (Item.status) {
      result = <Props 
                key = {Item.id}
                Name ={Item.mobilename}
                Price = {Item.mobileprice}
                Image= {Item.Image}
              />
    }
      return result;
  })

  // Tạo tham số sử dụng cho State
  var stateElement = this.state.productMobile.map((Item,index) =>{
    let stateResult = "";
    if (Item.status) {
      stateResult =  <tr key ={index}>
                        <td>{Item.id}</td>
                        <td>{Item.mobilename}</td>
                        <td>{Item.mobileprice}</td>
                      </tr>
    }

    return stateResult
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


        <div className="container">
        <h1>Thực hành về Props</h1>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <div className="mb-3">
                <div className="mb-3">
                  <label className="form-label">Thêm Sản Phẩm</label>
                  <input type="text" className="form-control" ref ={this.setTextInputRef} />
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.addToProduct}>Lưu</button>
              </div>
            </div>
          </div>


          <div className="row">
            {/* sử dụng Props */}
              {elements}
          </div>

          <h1>Thực hành về State</h1>
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-12">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên Sản Phẩm</th>
                    <th scope="col">Giá Tiền</th>
                    
                  </tr>
                </thead>
                <tbody>
                  {/* Sử dụng State */}
                  {stateElement}
                </tbody>
              </table>
              <button type="button" className="btn btn-outline-primary" onClick={this.changeValue}>
                Active : {this.state.isActive === true  ? 'True' : 'False'}
              </button>
            </div>
          </div>
      </div>
        
      </div>
    );
  }
}

export default Demo;
