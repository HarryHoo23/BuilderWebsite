import React from 'react';
import DisplayCard from './DisplayCard';
import styled from 'styled-components';
import M from 'materialize-css';

const Layout = styled.div`
    padding: 3rem 0;

    .tabs .tab a{
        color: rgb(80, 85,115);
    }

    .tabs .indicator {
        background-color: rgb(80, 80, 110);
    }

    .tabs .tab a:hover {
        background-color: transparent;
        color: black;
        font-weight: 400;
    }
`

class DisplayPage extends React.Component {

    componentDidMount(){
        M.Tabs.init(this.Tabs);        
    }

    render(){
        return(
            <Layout>
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
                            <DisplayCard title="House" />                                                
                            <DisplayCard />
                        </div>
                        <div id="swipe-townHouse" className="col s12">
                            <DisplayCard title="TownHouse" />
                        </div>
                        <div id="swipe-apartment" className="col s12">
                            <DisplayCard />
                    </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default DisplayPage;

