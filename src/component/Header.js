import React, {Component} from 'react';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <a className="navbar-brand">Trang Chủ</a>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" >Giới Thiệu</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Liên Lạc</a>
                        </li>
                    </ul>
                </div>
            </nav>
            
        );
    }
}

export default Header;