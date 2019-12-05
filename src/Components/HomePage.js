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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: -1;
`

const Overlay = styled.div`
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
`

const Heading = styled.div`
    height:100vh;
    background:none;
`

const HeadingContent = styled.div`
    width: 100%;
    height: 100%;
    display: table;
`

const HeadingContentInner = styled.div`
    display: table-cell;
    vertical-align: middle;
`

const H1 = styled.h1`
    display: inline-block;
    color: #FFF;
    font-weight: 200;
`

const SPAN = styled.span`
    color: red;
    font-weight: 200;
`

const P = styled.p`
    color: #FFF;
`


class HomePage extends React.Component {
    componentDidMount() {
        new WOW.WOW().init();
    }

    render(){
        return(
            <div>
                <Heading>                    
                    <Background>                                    
                    </Background> 
                    <Overlay />   
                    <HeadingContent>
                        <HeadingContentInner>
                        <div className="center">
                            <H1>Hongwei</H1><br />
                            <H1 id="home-heading-2">Creative <SPAN>Constructor</SPAN></H1>
                        </div>

                        <div className="container center">
                            <P>This is some text that has no meaning in it. So just take a look
                                wiil be fine. And I still need to make this paragraph a little bit
                                longer to show the long enough content.
                            </P>
                        </div>
                        </HeadingContentInner>    
                    </HeadingContent>                                        
                </Heading>                  
                <div className="grey lighten-4">                
                    <Container style={{padding:'6em 1.5em'}}>
                        {/* <div className="center">
                            <h2>Our Mission</h2>
                        </div> */}
                        <div className="row" style={{paddingTop:'1.5em'}}>
                            <Promotion name="Speed Development" icon="flash_on" class="wow fadeInLeft" data="3s" />
                            <Promotion name="User Experience" icon="assignment_ind" class="wow fadeInUp" data="3s" />
                            <Promotion name="Easy to Work With" icon="build" class="wow fadeInRight" data="3s" />
                        </div>
                    </Container>
                </div>
                <div className="white">
                    <div className="container" style={{padding:'2rem 0'}}>
                        <Card title="Creative Innovation" introduction={Creative} image="home_bg1" />
                        <Card title="Build Custom" introduction={Build} image="home_bg2" />
                        <Card title="Pre-designed Fllor Plans" introduction={Plan} image="home_bg3" />
                    </div>
                </div>
                {/* <div className="white">
                    <Footer />                        
                </div>  */}
            </div>    
        )
    }
    
}

export default HomePage;