import React from 'react';
import { Container } from './Container';
import M from 'materialize-css';


class DetailPage extends React.Component{
    componentDidMount(){
        let elements = document.querySelectorAll('.carousel');
        M.Carousel.init(elements, {fullWidth:true, indicators:true});
    }

    render(){
        return(
            <div>
                <div className="carousel carousel-slider">
                    <a className="carousel-item" href="#one!"><img src={require('../pic/builder.jpg')} alt="pictures1" /></a>
                    <a className="carousel-item" href="#two!"><img src={require('../pic/builder.jpg')} alt="pictures2" /></a>
                    <a className="carousel-item" href="#three!"><img src={require('../pic/builder.jpg')} alt="pictures3" /></a>
                    <a className="carousel-item" href="#four!"><img src={require('../pic/builder.jpg')} alt="pictures4" /></a>
                </div>
                <Container>
                    <div>
                        This is a detail page
                    </div>
                </Container>
            </div>
        )
    }
}

export default DetailPage;