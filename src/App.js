import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage';
import DisplayPage from './Components/DisplayFrames/DisplayPage';
import BuildWithUs from './Components/BuildWithUs/BuildWithUs';
import DetailPage from './Components/DetailPage/DetailPage';
import Footer from './Components/DisplayFrames/Footer';

class App extends Component {
    render(){
        return (
            <div>                
                <BrowserRouter>
                <div>
                    <Header />
                    <Route path="/" exact component={HomePage} />
                    <Route path="/displayPage" exact component={DisplayPage} />
                    <Route path="/build-with-us" exact component={BuildWithUs} />
                    <Route path="/displayPage/detailPage/"  component={DetailPage} />
                    <Footer />
                </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;