import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { Container } from '../Container';
import styled from 'styled-components';

const Navgation = styled.nav`
    background: linear-gradient(90deg,rgba(80,120,200,0.8) 0%,rgba(31,37,83,0.7) 75%);
`

class Header extends React.Component {
    componentDidMount(){
        let elements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elements, {inDuration:300, outDuration: 250});

        var elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems, {inDuration:300, outDuration:300, draggable:true})
    }

    render(){
        return(
            <div className="navbar-fixed">
                <ul id="dropdown1" className="dropdown-content">
                    <li><Link to="/displayPage">Display All</Link></li>
                    <li className="divider"></li>
                    <li><Link to="/displayPage">House</Link></li>
                    <li><Link to="/displayPage">Town House</Link></li>                    
                    <li><Link to="#!">Apartment</Link></li>
                </ul>
                <Navgation className="grey darken-5" style={{zIndex:'10'}}>
                    <Container className="nav-wrapper">
                        <div className="header-top">
                            <Link to="/" className="brand-logo">HongWei</Link>
                            <a href="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/displayPage" className="dropdown-trigger" data-target="dropdown1">Display</Link></li>
                            <li><Link to="/build-with-us">Build With Us</Link></li>
                            </ul>
                        </div>                
                    </Container>
                </Navgation>
                <ul className="sidenav" id="mobile-demo">
                    <li><div className="user-view">
                    <div className="center">
                        <img src={require('../../pic/builder.jpg')} className="img-responsive circle" style={{height:'70px', width:'70px', display:'unset'}} alt="avatar" />
                    </div>
                    </div></li>
                    <li><Link to="/" className="sidenav-close" ><i className="material-icons">cloud</i>Home</Link></li>
                    <li><Link to="/displayPage" className="sidenav-close" >Display</Link></li>
                    <li><Link to="/build-with-us" className="sidenav-close" >Build With Us</Link></li>
                </ul>
            </div>
        )
    }
}

export default Header;