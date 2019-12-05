import React from 'react';
// import styled from 'styled-components';
import { Link } from 'react-router-dom';
import M from 'materialize-css';

// const Word = styled.div`
    
// `


class Card extends React.Component {
    componentDidMount(){
        let elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {inDuration:300});

    }

    render(){
        return (
            <div className="row" style={{marginBottom:'0px', padding:'10px 0'}}>
                <div className="col l5 m12 s12">
                    <h5>
                        {this.props.title}
                    </h5>
                    <p>
                        {this.props.introduction}
                    </p>
                    <Link className="waves-effect btn-small white" style={{color:'black', border:'solid 1px rgba(1,1,1,.3)', borderRadius:'12px'}}><i className="material-icons right" style={{transform:'rotate(180deg)'}}>more</i>Read More</Link>
                </div>
                <div className="col l1"></div>
                <div className="col l6 m12 s12" style={{paddingTop:'10px'}}>
                    <img src={require(`../pic/${this.props.image}.jpg`)} className="responsive-img materialboxed" alt="three-pics">
                    </img>
                </div> 
            </div>
        )
    }
}

export default Card;