import React from 'react';
import { Link } from 'react-router-dom';

const DisplayCard = (props) => {
    return(
        <div>            
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img src={require('../pic/builder.jpg')} className="responsive-img" alt="builder-pic" />
                        <span class="card-title">{props.title}</span>                        
                    </div>
                    {/* <div className="container">
                        <h5 className="card-title">{props.title}</h5>
                    </div> */}
                    <div className="card-content">
                        <p>
                        I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.
                        </p>
                    </div>
                    <div className="card-action">
                        <Link to="/displayPage/detailPage">Read More ></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayCard;