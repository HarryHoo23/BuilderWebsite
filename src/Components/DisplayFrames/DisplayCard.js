import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
    .link {
        color: #0066cc !important;
    }

    :hover a {
        color: #3399ff !important;
        transition: 0.4s;
    }

`

const DisplayCard = (props) => {
    return(
        <Card>            
            <div className="col s12 m4 l6">
                <div className="card" style={{width: '350px', margin: '15px 20px'}}>
                    <div className="card-image">
                        <img src={props.url} className="responsive-img" alt="builder-pic" />
                        <span className="card-title">{props.title}</span>                        
                    </div>
                    <div className="card-content">
                        <p>
                        {props.information}
                        </p>
                    </div>
                    <div className="card-action">
                        <Link to={{
                            pathname: `/displayPage/detailPage/${props.type}/${props.id}`,
                            data: [props.type, props.id]
                        }} className="link">Read More ></Link>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default DisplayCard;