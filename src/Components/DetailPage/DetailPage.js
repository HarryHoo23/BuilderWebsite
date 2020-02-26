import React from 'react';
import { Container } from '../Container/Container';
import styled from 'styled-components';

const Background = styled.div`

`

class DetailPage extends React.Component{
    // state={commments=[], imgUrl:'' }
    state = {
        houseType: '',
        id: 0
    }

    componentDidMount(){
        const data = {...this.props.location.data};
        console.log(data[0])
        this.setState({
            houseType: data[0],
            id: Number(data[1])
        })
    }   

    render(){
        return(
            <div>
                <Background>
                    
                </Background>
                <div className="carousel carousel-slider">
                    
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