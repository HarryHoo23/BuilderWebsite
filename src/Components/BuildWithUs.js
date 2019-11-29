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
                <img className="responsive-img" src={img} />                                    
                <Container>
                    <SecondDiv className="row">
                        <SendForm />
                        <ContactUs />
                    </SecondDiv>
                </Container>
            </div>
        )
    }
}

export default BuildWithUs;