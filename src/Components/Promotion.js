import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    padding: 3rem 1rem;
    background: #FFF;
    box-shadow: 0 0 10px rgba(0,0,0,.15);
    transition: all 200ms linear;
    :hover {
        background-color: rgba(80,120,200,0.8);
    }
`

const Promotion = (props) => {
    return(
        <div className={`col s4 center ${props.class}`} data-wow-duration={props.data}>
            <Box>
                <i className="medium material-icons">{props.icon}</i>
                <h5>{props.name}</h5>
                <p>
                    This is a box
                </p>
            </Box>
        </div>
    )
}

export default Promotion;