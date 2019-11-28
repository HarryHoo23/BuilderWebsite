import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div`
    .header-top {
        padding: 0 2em;
    }
`

const Header = () => {
    return(
        <Styles>
            <nav style={{position:"fixed"}}>
                <div className="nav-wrapper grey darken-2">
                    <div className="header-top">
                        <Link to="/" className="brand-logo">HongWei</Link>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/displayPage">Display</Link></li>
                        <li><Link to="/build-with-us">Build With Us</Link></li>
                        </ul>
                    </div>                
                </div>
            </nav>
        </Styles>
    )
}

export default Header;