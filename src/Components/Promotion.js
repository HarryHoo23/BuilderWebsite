import React from 'react';

const Promotion = (props) => {
    return(
        <div className={`col s4 center ${props.class}`} data-wow-duration={props.data}>
            <i className="medium material-icons">{props.icon}</i>
            <h5>{props.name}</h5>
        </div>
    )
}

export default Promotion;