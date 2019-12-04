import React from 'react';
import DisplayCard from './DisplayCard';
import styled from 'styled-components';
import M from 'materialize-css';

const Layout = styled.div`
    padding-top:6rem;
`

class DisplayPage extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        M.Tabs.init(this.Tabs);        
    }

    render(){
        return(
            <div>
                <Layout>
                </Layout>
                <div className="container">
                    <div className="row">
                    <ul
                        ref={Tabs => {
                            this.Tabs = Tabs;
                        }}
                        id="tabs-swipe-demo"
                        className="tabs"
                        >
                        <li className="tab col s3">
                            <a className="active" href="#swipe-house">House</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#swipe-townHouse">TownHouse</a>
                        </li>
                        <li className="tab col s3">
                            <a href="#swipe-apartment">Apartment</a>
                        </li>
                        </ul>
                        <div id="swipe-house" className="col s12">
                            <DisplayCard title="TownHouse" />                                                
                            <DisplayCard />
                        </div>
                        <div id="swipe-townHouse" className="col s12">
                            <DisplayCard />
                        </div>
                        <div id="swipe-apartment" className="col s12">
                            <DisplayCard />
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DisplayPage;

