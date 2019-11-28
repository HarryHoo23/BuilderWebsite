import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input/Input';

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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(key) {
        return(event) => {
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
                };
            });
        };
    }

    onFormSubmit = event => {
        event.preventDefault();
        const quote = {
            everything: this.state.formData
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
                                <Input 
                                    key={key}
                                    placeholder={label} 
                                    value={value}
                                    onChange={this.handleInputChange(key)}
                                />
                                </label>
                            )  
                        } 
                        if (key === "houseType") {
                            return(
                                <label key={key}>{label}
                                    <select onChange={this.handleInputChange(key)} value={value} className="browser-default" >
                                        <option value="" defaultValue>Choose Your Option</option>
                                        <option value="Town House">Town House</option>    
                                        <option value="House">House</option>
                                        <option value="Apartment">Apartment</option>
                                    </select>     
                                </label>
                            )
                        } else {
                            return(
                                <label key={key}>{label}
                                    <textarea value={value} 
                                        onChange={this.handleInputChange(key)}
                                        placeholder="Tell us more about the details of the project you want to build" 
                                        cols="30"
                                        rows="10"
                                        style={{outline:'none', resize:'none', height:'8rem'}}
                                    />
                                </label>
                            )
                        }                                       
                    })}                                                
                    <Button className="btn waves-effect waves-light" type="submit">Submit
                        <i className="material-icons right">send</i>
                    </Button>
                </form>
            </Layout>
        )
    }    
}

export default SendForm;