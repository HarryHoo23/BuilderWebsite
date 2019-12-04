import React from 'react';
import styled from 'styled-components';

// const Heading = styled.div`
//     width: 100%;
//     text-align: center;
// `

const H5 = styled.h5`
    color: #ffab91;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    word-spacing: 8px;
    display: inline-block;
    transform: rotate(-90deg);
    position: relative;
    top: 60px;
    left: -53px;
`
const H2 = styled.h2`
    margin: 0 0 0 1.5rem;
    font-size: 42px;
    font-weight: 100;
    line-height: 45px;
`

const P = styled.p`
    display: inline-flex;
    font-size: 20px;
`

const Icon = styled.i`
    width: 3rem;
`

const ContactUs = () => {
    return(
        <div className="col s12 m12 l5" style={{padding:'2rem'}}>
            <div className="vertical-heading">
                <H5>Who we are</H5>
                <H2>Get<br/>In <strong>Touch</strong></H2>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae, porro ab, laudantium soluta provident sed alias nisi molestiae, velit dicta illum facere vero dolores fugiat voluptas eius ut. Corrupti?</p>
            <div>                                
                <P><Icon className="material-icons small" >contact_phone</Icon>0406686125</P>
            </div>
            <div>                
                <P><Icon className="material-icons small" >contact_phone</Icon>0406686125</P>
                
            </div>
            <div>                
                <P><Icon className="material-icons small" >contact_phone</Icon>0406686125</P>
                
            </div>
            
            
            
        </div>
    )
}

export default ContactUs;