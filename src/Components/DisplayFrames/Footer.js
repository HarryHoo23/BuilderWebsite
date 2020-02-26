import React from 'react';
// import styled from 'styled-components';
// import { Container } from './Container';

const Footer = () => {
    return(
        <footer className="page-footer" style={{background:'linear-gradient(90deg,rgba(31,37,83,1) 0%,rgba(80,120,200,1) 75%)'}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Follow Us On: </h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="https://harryhoo.site" target="_blank" rel="noopener noreferrer">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
              <div className="center">
                © 2020 Copyright Hongwei Construction
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;