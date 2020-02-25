import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

const Word = styled.div`
    p {
        font-family: 'Open Sans', sans-serif;
    }

    .readButton {
        color: black;
        border: solid 1px rgba(1,1,1,.3);
        border-radius: 12px;
    }
`


class Card extends React.Component {
    componentDidMount(){
        let elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {inDuration:300});

    }

    render(){
        return (
            <div className="row" style={{marginBottom:'0px', padding:'10px 0'}}>
                <Word className={`col l5 m12 s12 ${this.props.class}`} data-wow-duration={this.props.data}>
                    <h5>
                        {this.props.title}
                    </h5>
                    <p>
                        {this.props.introduction}
                    </p>
                    <Link to="/" className="btn-small waves-effect waves-light white readButton" >
                        <i className="material-icons right" style={{transform:'rotate(180deg)'}}>more</i>Read More</Link>
                </Word>
                <div className="col l1"></div>
                <div className={`col l6 m12 s12 ${this.props.class}`} data-wow-duration={this.props.data} style={{paddingTop:'10px'}}>
                    <img src={this.props.image} className="responsive-img materialboxed" alt="three-pics">
                    </img>
                </div> 
            </div>
        )
    }
}

export default Card;