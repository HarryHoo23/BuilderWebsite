import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    padding: 2rem 0;
`

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
    font-size: 15px;
    font-style: normal;
`

const Icon = styled.i`
    width: 2.5rem;
    font-size: 1.5rem;
`

const Span = styled.span`
    display: block;
`

const ContactUs = () => {
    return(
        <div className="col s12 m12 l5" style={{padding:'2rem'}}>
            <div className="vertical-heading">
                <H5>Who we are</H5>
                <H2>Get<br/>In <strong>Touch</strong></H2>
            </div>
            <Content>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae, porro ab, laudantium soluta provident sed alias nisi molestiae, velit dicta illum facere vero dolores fugiat voluptas eius ut. Corrupti?</p>
            </Content>
            <address>                                
                <Span><P><Icon className="material-icons" >contact_phone</Icon><strong>Phone</strong>: 0406686125</P></Span>
                <Span><P><Icon className="material-icons" >home</Icon><strong>Address</strong>: lv1, 60 Belgrave Rd, Malvern East</P></Span>
                <Span><P><Icon className="material-icons" >work</Icon><strong>Phone</strong>: 0406686125</P></Span>              
                <Span><P><Icon className="material-icons" >email</Icon><strong>Email</strong>: hoozh1123@gmail.com</P></Span>              
            </address>
            
            
            
        </div>
    )
}

export default ContactUs;