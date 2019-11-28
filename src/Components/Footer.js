import React from 'react';
import styled from 'styled-components';
import { Container } from './Container';

const Footer = () => {
    return(
        <Container>
            <div className="row" style={{marginBottom:'0'}}>
                <div className="col s6 center">
                    <h5>About Us</h5>
                </div>
                <div className="col s6 center">
                    <h5>Follow Us</h5>
                </div>
            </div>
        </Container>
    )
}

export default Footer;