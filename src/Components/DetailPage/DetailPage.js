import React from 'react';
import { Container } from '../Container/Container';
import styled from 'styled-components';
import axios from '../../axiosDB';

const Background = styled.div`

`

class DetailPage extends React.Component{
    // state={commments=[], imgUrl:'' }
    state = {
        projectDetail: {}
    }

    componentDidMount(){
        const data = {...this.props.location.data};
        axios.get(`/Card/${data[0]}/${data[1]}.json`)
            .then(res => {
                const fetchData = [];
                fetchData.push({
                    ...res.data.detail  
                })
                this.setState({projectDetail: fetchData[0]})
                console.log(fetchData[0]);
            }).catch(err => {
                console.log(err)
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