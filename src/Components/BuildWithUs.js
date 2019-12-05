import React, { Component } from 'react';
import SendForm from './SendForm';
import img from '../pic/builder.jpg';
import styled from 'styled-components';
import { Container } from './Container';
import ContactUs from './ContactUs';

// const Background = styled.div`
//     height: 100vh;
//     background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${img}) center center /cover;
// `

const SecondDiv = styled.div`
    
`

class BuildWithUs extends Component {
    render() {
        return(
            <div>
                <img className="responsive-img" src={img} alt="background-pictures" />                                    
                <Container>
                    <SecondDiv className="row">
                        <SendForm />
                        <div className="col l1"></div>
                        <ContactUs />                       
                    </SecondDiv>
                </Container>
            </div>
        )
    }
}

export default BuildWithUs;