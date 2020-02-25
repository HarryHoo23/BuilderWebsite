import React, { Component } from 'react';
import SendForm from './SendForm';
import img from '../../pic/livingRoom.jpg';
import styled from 'styled-components';
import { Container } from '../Container/Container';
import ContactUs from './ContactUs';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

const BoxDiv = styled.div`
    width: 90%;
    margin: 0 auto;
`


class BuildWithUs extends Component {
    render() {
        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            spaceBetween: 30
        }

        return(
            <div>
                <BoxDiv>
                <Swiper {...params}>
                    <div>
                        <img src={img} alt="picture1" className="responsive-img"/>
                    </div>
                    <div>
                        <img src={img} alt="picture2" className="responsive-img"/>
                    </div>
                </Swiper>
                </BoxDiv>
                <Container>
                    <div className="row">
                        <SendForm />
                        <div className="col l1"></div>
                        <ContactUs />                       
                    </div>
                </Container>
            </div>
        )
    }
}

export default BuildWithUs;