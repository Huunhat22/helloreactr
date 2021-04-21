import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class Props extends Component{
    render(){
        return(
            <div className="col-3 col-sm-4 col-md-3 col-lg-3">
                <div className="card">
                    <img src={this.props.Image} className="card-img-top" alt={this.props.Name}></img>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.Name}</h5>
                        <p className="card-text">
                            {this.props.Price}
                        </p>
                        <a className="btn btn-primary">
                            {this.props.Buy}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default Props;