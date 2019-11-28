import React, { Component } from 'react';
import SendForm from './SendForm';
import img from '../pic/builder.jpg';
import styled from 'styled-components';

const Background = styled.div`
    height: 100vh;
    background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${img}) no-repeat center center /cover;
`

class BuildWithUs extends Component {
    render() {
        return(
            <div>
                <img src={img} className="responsive-img"></img>
                <SendForm />
            </div>
        )
    }
}

export default BuildWithUs;