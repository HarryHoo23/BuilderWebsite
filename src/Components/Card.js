import React from 'react';
import styled from 'styled-components';

const Word = styled.div`
    margin-top:20px;
`


const Card = props => {
    return (
        <div className="container" style={{paddingTop:"1em"}}>
            <div className="row">
                <Word className="col s4">
                    <h5>
                        {props.title}
                    </h5>
                    <p>
                        {props.introduction}
                    </p>
                </Word>
                <div className="col s1"></div>
                <div className="col s7" style={{paddingTop:'10px'}}>
                    <img src={require(`../pic/${props.image}.jpg`)} className="responsive-img">
                    </img>
                </div> 
            </div>
        </div>
    )
}

export default Card;