import React from 'react';
import DisplayCard from './DisplayCard';
import styled from 'styled-components';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import axios from '../../axiosDB';

const Layout = styled.div`
    padding: 3rem 0;

    .cardDisplay {
        display: flexbox;
        flex-wrap: wrap;
        align-content: space-around;
        /* justify-content: space-between; */
    }

`

class DisplayPage extends React.Component {
    state = {
        house: [],
        apartment: [],
        townhouse: []
    }

    componentDidMount(){
        this.fetchHouses();
        this.fetchApartment();
        this.fetchTownHouse();
    }

    fetchHouses() {
        axios.get('/Card.json')
        .then(res => {
            const fetchHouses = [];
            for (let key in res.data.House) {
                fetchHouses.push({
                    ...res.data.House[key],
                    id: key
                });
            }
            this.setState({house: fetchHouses});
        })
        .catch(err => {
            console.log(err)
        })
    }

    fetchApartment() {
        axios.get('/Card.json')
        .then(res => {
            const fetchApartment = [];
            for (let key in res.data.Apartment) {
                fetchApartment.push({
                    ...res.data.Apartment[key],
                    id: key
                });
            }
            this.setState({apartment: fetchApartment});
        })
        .catch(err => {
            console.log(err)
        })
    }

    fetchTownHouse() {
        axios.get('/Card.json')
        .then(res => {
            const fetchTownHouse = [];
            for (let key in res.data.TownHouse) {
                fetchTownHouse.push({
                    ...res.data.TownHouse[key],
                    id: key
                });
            }
            this.setState({townhouse: fetchTownHouse});
        })
        .catch(err => {
            console.log(err)
        })
    }

    render(){
        return(
            <Layout>
                <div className="container">
                <Tabs>
                    <TabList>
                    <Tab>House</Tab>
                    <Tab>Apartment</Tab>
                    <Tab>TownHouse</Tab>
                    </TabList>

                    <TabPanel>
                        <h4>House</h4>
                        <div className="cardDisplay row">
                            {this.state.house.map(house => {
                                return (
                                <DisplayCard 
                                    key={house.id}
                                    url={house.url}
                                    id={house.id}
                                    type="House"
                                    information={house.description}
                                />)
                            })}
                        </div>
                    </TabPanel>
                        
                    <TabPanel>
                        <h4>Apartment</h4>
                        <div className="cardDisplay">
                            {this.state.apartment.map(apart => {
                                return (
                                <DisplayCard 
                                    key={apart.id}
                                    url={apart.url}
                                    id={apart.id}
                                    type="Apartment"
                                    information={apart.description}
                                />)
                            })}
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <h4>TownHouse</h4>
                        <div className="cardDisplay">
                            {this.state.townhouse.map(thouse => {
                                return (
                                <DisplayCard 
                                    key={thouse.id}
                                    id={thouse.id}
                                    type="TownHouse"
                                    url={thouse.url}
                                    information={thouse.description}
                                />)
                            })}
                        </div>
                    </TabPanel>
                </Tabs>
                </div>
            </Layout>
        )
    }
}

export default DisplayPage;

