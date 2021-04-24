import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class Product extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img alt="" src="https://hoaonline247.com/photos/view/photos/larges//5d159b84866857687f793219.cl.jpg" className="card-img-top"></img>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button className="btn btn-primary">Go somewhere</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Product;

/* sử dụng alt shift k để format code */