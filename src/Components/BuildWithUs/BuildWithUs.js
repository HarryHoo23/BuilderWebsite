import React, { Component } from 'react';
import SendForm from './SendForm';
import img from '../../pic/livingRoom.jpg';
import styled from 'styled-components';
import { Container } from '../Container/Container';
import ContactUs from './ContactUs';
import M from 'materialize-css';

// const Background = styled.div`
//     height: 100vh;
//     background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${img}) center center /cover;
// `

const SecondDiv = styled.div`
    
`

class BuildWithUs extends Component {
    componentDidMount(){
        let elements = document.querySelectorAll('.carousel');
        M.Carousel.init(elements, {fullWidth:true, indicators:true, pressed: true});
        // let instance = M.Carousel.getInstance(elements);
        // instance.next();
        // instance.prev();
    }

    render() {
        return(
            <div>
                <div className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!"><img src={img} alt="picture1" className="responsive-img" /></a>
                    <a className="carousel-item" href="#two!"><img src={img} alt="picture2" className="responsive-img" /></a>
                    <a className="carousel-item" href="#three!"><img src={img} alt="picture3" className="responsive-img" /></a>
                    <a className="carousel-item" href="#four!"><img src={img} alt="picture4" className="responsive-img" /></a>
                </div>                                    
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