import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import HomePage from '../Components/HomePage';
import DisplayPage from '../Components/DisplayPage';
import BuildWithUs from '../Components/BuildWithUs';
import DetailPage from '../Components/DetailPage';

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
                    <Route path="/displayPage/detailPage" exact component={DetailPage} />
                </div>
                </BrowserRouter>
            </div>
        )
    }
};

export default App;