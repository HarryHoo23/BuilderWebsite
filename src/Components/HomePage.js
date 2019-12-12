import React from 'react';
import styled from 'styled-components';
import img from '../pic/background.jpg';
import Promotion from './Promotion';
import { Container } from './Container';
import Card from './Card';
import WOW from 'wowjs'; 
// import Carousel from '../Plugin/Carousel';

var data = require('../Database/db.json');

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
    font-weight: 100;
`

const SPAN = styled.span`
    color: #e0e0e0;
    font-weight: 200;
    font-family:'Merriweather', serif;
`

const P = styled.p`
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
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
                        <div className="center wow fadeInUp" data-wow-duration="2s">
                            <H1 style={{fontWeight:'300', fontFamily:'Patrick Hand, cursive', fontSize:'70px', color:'#e0e0e0'}}>HONGWEI</H1><br />
                            <H1 id="home-heading-2">Expert in <SPAN>Domestic Construction</SPAN></H1>
                        </div>

                        <div className="container center">
                            <P className="wow bounceIn" data-wow-duration="2s">This is some text that has no meaning in it. So just take a look
                                wiil be fine. And I still need to make this paragraph a little bit
                                longer to show the long enough content.
                            </P>
                        </div>
                        </HeadingContentInner>    
                    </HeadingContent>                                        
                </Heading>                  
                <div className="grey lighten-4">                
                    <Container style={{padding:'6em 1.5em'}}>                       
                        <div className="row" style={{paddingTop:'1.5em'}}>
                            <Promotion name="Speed Development" icon="flash_on" class="wow fadeInLeft" data="2s" detail={data.PromotionData[0].Promotion1} />
                            <Promotion name="User Experience" icon="assignment_ind" class="wow fadeInUp" data="2s" detail={data.PromotionData[0].Promotion2} />
                            <Promotion name="Easy to Work With" icon="build" class="wow fadeInRight" data="2s" detail={data.PromotionData[0].Promotion3} />
                        </div>
                    </Container>
                </div>
                <div className="white">
                    <div className="container" style={{padding:'2rem 0'}}>
                        <Card title="Creative Innovation" introduction={data.CardData[0].Creative} image="home_bg1" class="wow fadeInLeft" data="2s" />
                        <Card title="Build Custom" introduction={data.CardData[0].Build} image="home_bg2" class="wow fadeInRight" data="2s" />
                        <Card title="Pre-designed Fllor Plans" introduction={data.CardData[0].Plan} image="home_bg3" class="wow fadeInLeft" data="2s" />
                    </div>
                </div>
            </div>    
        )
    }
    
}

export default HomePage;