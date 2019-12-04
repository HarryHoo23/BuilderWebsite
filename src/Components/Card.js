import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Word = styled.div`
    
`


const Card = props => {
    return (
        <div className="row" style={{marginBottom:'0px', padding:'10px 0'}}>
            <Word className="col l5 m12 s12">
                <h5>
                    {props.title}
                </h5>
                <p>
                    {props.introduction}
                </p>
                <Link className="waves-effect waves-light btn-small white" style={{color:'black', border:'solid 1px rgba(1,1,1,.3)', borderRadius:'12px'}}><i className="material-icons right" style={{transform:'rotate(180deg)'}}>more</i>Read More</Link>
            </Word>
            <div className="col l1"></div>
            <div className="col l7 m12 s12" style={{paddingTop:'10px'}}>
                <img src={require(`../pic/${props.image}.jpg`)} className="responsive-img">
                </img>
            </div> 
        </div>
    )
}

export default Card;