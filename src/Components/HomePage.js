import React from 'react';
import styled from 'styled-components';
import img from '../pic/background.jpg';
import Promotion from './Promotion';
import { Container } from './Container/Container';
import Card from './DisplayFrames/Card';
import WOW from 'wowjs'; 

import { storage } from '../firebase/firebase';

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
const Title = styled.div`
    h1 {
        display: inline-block;
        color: #FFF;
        font-weight: 300;
        font-family: 'Patrick Hand', serif;
        font-Size: 5rem;
    }

    span {
        color: #e0e0e0;
        font-weight: 200;
        font-family:'Merriweather', serif;
        font-size: 60px;
    }

    p {
        margin-top: 80px;
        color: #FFF;
        font-family: 'Open Sans', sans-serif;
    }

    @media screen and (min-width: 601px) and (max-width: 992px) {
        padding: 0 5px;

        h1 {
            font-size: 4rem;
        }

        span {
            font-size: 50px;
        }

        .description {
            padding: 0 30px;
        }
    }

    @media only screen and (max-width: 600px) and (min-width: 401px) {
        padding: 0 10px;

        h1 {
            font-size: 2.5rem;
        }

        span {
            font-size: 30px;
        }

        p {
            font-size: 15px;
        }

        .description {
            padding: 0 15px;
        }
    }

    @media only screen and (max-width: 400px) {
        h1 {
            font-size: 3rem;
        }

        span {
            font-size: 30px;
        }

        .description {
            padding: 0 20px;
        }
    }
`

class HomePage extends React.Component {
    state = {
        pic: []
    }

    componentDidMount() {
        new WOW.WOW().init();
        this.handleDownload();
    }

    handleDownload() {
        const downloadUrl = storage.ref('HomePage');
        downloadUrl.listAll().then(res => {
            res.items.map(image => {
                return (
                    image.getDownloadURL().then(url => {
                        this.setState({pic: [...this.state.pic, url]})
                    })
                )})
            })
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
                        <Title className="center wow fadeInUp" data-wow-duration="2s">
                            <h1>HONGWEI</h1><br/>
                            <h1>Expert in <span>Domestic Construction</span></h1>
                        </Title>

                        <Title className="container center">
                            <div className="description">
                                <p className="wow bounceIn" data-wow-duration="2s">This is some text that has no meaning in it. So just take a look
                                    wiil be fine. And I still need to make this paragraph a little bit
                                    longer to show the long enough content.
                                </p>
                            </div>
                        </Title>
                        </HeadingContentInner>    
                    </HeadingContent>                                        
                </Heading>                  
                <div className="grey lighten-4">                
                    <Container style={{padding:'6em 1.5em'}}>                       
                        <div className="row" style={{paddingTop:'1.5em'}}>
                            <Promotion name="Speed Development" 
                                icon="flash_on" 
                                class="wow fadeInLeft" 
                                data="2s" 
                                detail={data.PromotionData[0].Promotion1} />
                            <Promotion name="User Experience" 
                                icon="assignment_ind" 
                                class="wow fadeInUp" data="2s" 
                                detail={data.PromotionData[0].Promotion2} />
                            <Promotion name="Easy to Work With" 
                                icon="build" 
                                class="wow fadeInRight" 
                                data="2s" 
                                detail={data.PromotionData[0].Promotion3} />
                        </div>
                    </Container>
                </div>
                <div className="white">
                    <div className="container" style={{padding:'2rem 0'}}>
                        <Card title="Creative Innovation" 
                            introduction={data.CardData[0].Creative} 
                            image={this.state.pic[0]} 
                            class="wow fadeInLeft" 
                            data="2s" />
                        <Card title="Build Custom" 
                            introduction={data.CardData[0].Build} 
                            image={this.state.pic[1]}
                            class="wow fadeInRight" 
                            data="2s" />
                        <Card title="Pre-designed Fllor Plans" 
                            introduction={data.CardData[0].Plan} 
                            image={this.state.pic[2]} 
                            class="wow fadeInLeft" 
                            data="2s" />
                    </div>
                </div>
            </div>    
        )
    }
    
}

export default HomePage;