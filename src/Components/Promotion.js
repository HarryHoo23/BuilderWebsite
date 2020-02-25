import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    padding: 3rem 1rem;
    height: 300px;
    background: #FFF;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    transition: all 200ms linear;

    p {
        font-family: 'Open Sans', sans-serif;
    }

    h5 {
        font-size: 17px;
        font-family:'Merriweather', serif;
    }

    :hover {
        background-color: rgba(80,120,200,0.8);
    }

    :hover i,
    :hover h5,
    :hover p {
        color:#FFF;
        transition: all 500ms ease-in-out;
        -webkit-transition: all 500ms ease-in-out;
    }

    :hover i,
    :hover h5 {
        transform: translateY(-25px);
        -webkit-transform: translateY(-25px);
    }

    @media only screen and (min-width: 601px) and (max-width: 992px) {
        h5 {
            font-size: 18px;
        }

        p {
            font-size: 13px;
        }
        padding: 50px 25px 0px 25px;
        margin: 15px 0;
    }

    @media only screen and (max-width: 600px) {
        padding: 55px 30px;
        margin: 15px 0;
    }

    hr {
        width: 45px;
        height: 3px;
        background-color: rgb(31,37,83);
        margin: 0 auto;
        border: none;
    }
`

const Promotion = (props) => {
    return(
        <div className={`col m12 l4 s12 center ${props.class}`} data-wow-duration={props.data}>
            <Box >
                <i className="medium material-icons">{props.icon}</i>
                <h5>{props.name}</h5>
                <hr></hr>
                <p>
                    {props.detail}
                </p>
            </Box>
        </div>
    )
}

export default Promotion;