import React from 'react';
import styled from 'styled-components';
import img from '../pic/bg-house.jpg';
import Promotion from './Promotion';
import Footer from './Footer';
import { Container } from './Container';
import Card from './Card';
import { Creative, Build, Plan } from './Introduction';
import WOW from 'wowjs';
// import Carousel from '../Plugin/Carousel';

const Background = styled.div`
    height: 100vh;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    z-index: -9999;
`

const Heading = styled.div`
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
`

class HomePage extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }
    render(){
        return(
            <div>
                <Background>
                    <div className="container">
                        <Heading>
                        </Heading>
                    </div>
                </Background>
                
                {/* <Carousel /> */}
    
                <div className="grey lighten-4">                
                    <Container style={{padding:'2em 0'}}>
                        <div className="center">
                            <h2>Our Mission</h2>
                        </div>
                        <div className="row" style={{paddingTop:'1.5em'}}>
                            <Promotion name="Speed Development" icon="flash_on" class="wow fadeInLeft" data="3s" />
                            <Promotion name="User Experience" icon="assignment_ind" class="wow fadeInUp" data="3s" />
                            <Promotion name="Easy to Work With" icon="build" class="wow fadeInRight" data="3s" />
                        </div>
                    </Container>
                </div>
    
                <Card title="Creative Innovation" introduction={Creative} image="home_bg1" />
                <Card title="Build Custom" introduction={Build} image="home_bg2" />
                <Card title="Pre-designed Fllor Plans" introduction={Plan} image="home_bg3" />
                
                <div className="grey">
                    <Footer />
                </div>
            </div>
    
        )
    }
    
}

export default HomePage;