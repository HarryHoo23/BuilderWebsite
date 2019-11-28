import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin-top: 2rem;
    margin-left:auto;
    margin-right:auto;
    display:block;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

const Layout = styled.div`
    width: 50%;
    margin: 3rem;
    padding: 2rem 2rem 4rem 2rem;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border-radius: 15px;
`

class SendForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formData:{
                name : {
                    value: '',
                    label: 'Name',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input Your Name'
                    }
                },
                phone : {
                    value: '',
                    label: 'Phone Number',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input Your Phone Number'
                    }
                },
                email : {
                    value: '',
                    label: 'Email Address',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input Your Name'
                    }
                },
                address : {
                    value: '',
                    label: 'Project Address',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input Your Name'
                    }
                },
                budget : {
                    value: '',
                    label: 'Enter Your Budget',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input Your Budget'
                    }
                },
                houseType : {
                    value: '',
                    label: 'Choose the House Type',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please choose the house Type you prefer'
                    }
                },
                details : {
                    value: '',
                    label: 'Please tell us more about the project Details',
                    validation: {
                        validator:'isNotEmpty',
                        message: 'Please input the details of your Projects'
                    }
                },
            }
        };
        
    }

    handleInputChange(event, key) {
        const {target: {value}} = event;

        this.setState((prevState) => {
            return{
                formData: {
                    ...prevState.formData,
                    [key]: {
                        ...prevState.formData[key],
                        value,
                    }
                }
            }
        });
    }

    onFormSubmit = event => {
        event.preventDefault();
        const quote = {
            userName: this.state.name,
            userPhone: this.state.phone,
            userEmail: this.state.email,
            userAddress: this.state.address,
            userBudget: this.state.budget,
            userHouseType: this.state.houseType,
            userDetails: this.state.details
        }

        console.log(quote);
    }
    
    render() {
        const { formData } = this.state;
        return(
            <Layout> 
                <div style={{width:'100%', textAlign:'center', marginBottom:'2rem'}}>                
                    <h5 style={{display:'inline-block'}}>Contact Us</h5>
                </div>    
                <form className="col s12" onSubmit={this.onFormSubmit}>            
                    {Object.keys(formData).map((key) => {
                        const {label, value} = formData[key];
                        if (key !== "houseType" && key !== "details"){
                            return(                           
                                <label key={key}>{label}
                                <input 
                                    key={key}
                                    placeholder={label} 
                                    value={value}
                                    onChange={(event) => this.handleInputChange(event, key)}
                                />
                                </label>
                            )  
                        }
                                              
                    })}        
                    {/* <label>First Name
                    <input 
                        onChange={(event) => this.handleInputChange(event, 'name')}
                        placeholder="Please Enter Your Name" type="text" value={this.state.name} autoComplete="off" />
                    </label>
                    <label>Phone Number
                    <input 
                        onChange={(event) => this.handleInputChange(event, 'phone')}
                        placeholder="Please Enter Your Phone Number" value={this.state.phone} autoComplete="off" />
                    </label>
                    <label>Email Address
                    <input 
                        onChange={(event) => this.handleInputChange(event, 'email')}
                        placeholder="Please Enter your Email Address" value={this.state.email} type="email" />
                    </label>
                    <label>Project Address
                    <input 
                        onChange={(event) => this.handleInputChange(event, 'address')}
                        placeholder="Please Enter your desired Project Address" value={this.state.address} type="text" />
                    </label>
                    <label>Budget
                    <input 
                        onChange={(event) => this.handleInputChange(event, 'budget')}
                        placeholder="Please Enter your Budget" value={this.state.budget} />                    
                    </label> */}
                    <label>Looking to build a:                         
                        <select onChange={(event) => this.handleInputChange(event, 'houseType')} value={this.state.houseType} className="browser-default" >
                            <option value="" defaultValue>Choose Your Option</option>
                            <option value="Town House">Town House</option>    
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                        </select>      
                    </label>         
                    <label>Tell us more
                        <textarea value={this.state.details} 
                            onChange={(event) => this.handleInputChange(event, 'details')}
                            placeholder="Tell us more about the details of the project you want to build" 
                            cols="30"
                            rows="10"
                            style={{outline:'none', resize:'none', height:'8rem'}}
                        />
                    </label>
                    <Button className="btn waves-effect waves-light" type="submit">Submit
                        <i className="material-icons right">send</i>
                    </Button>
                </form>
            </Layout>
        )
    }    
}

export default SendForm;