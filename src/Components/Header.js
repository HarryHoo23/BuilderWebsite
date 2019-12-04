import React from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import { Container } from './Container';
import styled from 'styled-components';

const Navgation = styled.nav`
background: linear-gradient(90deg,rgba(80,120,200,0.8) 0%,rgba(31,37,83,0.7) 75%);
`

class Header extends React.Component {
    componentDidMount(){
        let elements = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elements, {inDuration:300, outDuration: 250});
    }

    render(){
        return(
            <div className="navbar-fixed">
                <ul id="dropdown1" class="dropdown-content">
                    <li><Link to="/displayPage">Display All</Link></li>
                    <li className="divider"></li>
                    <li><Link to="#!">House</Link></li>
                    <li><Link to="#!">Town House</Link></li>                    
                    <li><Link to="#!">Apartment</Link></li>
                </ul>
                <Navgation className="grey darken-5" style={{zIndex:'1030'}}>
                    <Container className="nav-wrapper">
                        <div className="header-top">
                            <Link to="/" className="brand-logo">HongWei</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/displayPage" className="dropdown-trigger" data-target="dropdown1">Display</Link></li>
                            <li><Link to="/build-with-us">Build With Us</Link></li>
                            </ul>
                        </div>                
                    </Container>
                </Navgation>
            </div>
        )
    }
}

export default Header;