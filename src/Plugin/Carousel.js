import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import img from '../pic/bg-house.jpg';

class Carousel extends Component {
    render() {
        const settings =  {
            autoplay: true,
            dots: false,
            autoplaySpeed:4000,
            duration: 1000,
            arrows: false
        };
        return(
            <Slider { ...settings}>
                <div>
                   <img src={img} className="materialboxed" width="100%"></img>
                </div>
                <div>
                <h3>2</h3>
                </div>
                <div>
                <h3>3</h3>
                </div>
            </Slider>
        )
    }
}

export default Carousel;