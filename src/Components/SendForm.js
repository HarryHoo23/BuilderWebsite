import React, { Component } from 'react';
import styled from 'styled-components';
import Input from './Input/Input';
import emailjs from 'emailjs-com';

const Button = styled.button`
    margin-top: 2rem;
    margin-left:auto;
    margin-right:auto;
    display:block;
    box-shadow: 0 0 5px rgba(0,0,0,0.2);
`

const Layout = styled.div`
    margin: 2rem 0;
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
                    icon: 'mode_edit', 
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Name'
                    }],
                },
                phone : {
                    value: '',
                    label: 'Phone Number',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Phone Number'
                    }],
                },
                email : {
                    value: '',
                    label: 'Email Address',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Email Address'
                    }, {
                        validator: 'isEmail',
                        message: 'Please Enter a valid Email Address',
                    }],
                },
                address : {
                    value: '',
                    label: 'Project Address',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Project Address'
                    }],
                },
                budget : {
                    value: '',
                    label: 'Enter Your Budget',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Budget'
                    }],
                },
                houseType : {
                    value: '',
                    label: 'Choose the House Type',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please choose the house Type you prefer'
                    }],
                },
                details : {
                    value: '',
                    label: 'Please tell us more about the project Details',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please input the details of your Projects'
                    }],
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
            clientName: this.state.formData.name.value,
            clientPhoneNumber: this.state.formData.phone.value,
            clientEmail: this.state.formData.email.value,
            clientProjectAddress: this.state.formData.address.value,
            clientBudget: this.state.formData.budget.value,
            clientHouseType: this.state.formData.houseType.value,
            clientDeatilsAboutProject: this.state.formData.details.value,
        }

        // emailjs.sendForm("hoozh1123_gmail_com", "template_rn0wlcdT", templateParams, "user_yUW74rtEDmz3gmHu9aBnl")
        //     .then((res) => {
        //         console.log(res.text);
        //     }, (err) => {
        //         console.log(err.text);
        //     })

        console.log(quote);

    }
    
    render() {
        const { formData } = this.state;
        return(
            <Layout className="col s12 m12 l7" style={{padding:'2rem'}}> 
                <div style={{width:'100%', textAlign:'center', marginBottom:'2rem'}}>                
                    <h5 style={{display:'inline-block'}}>Send Message</h5>
                </div>    
                <form onSubmit={this.onFormSubmit}>            
                    {Object.keys(formData).map((key) => {
                        const {label, value, validations} = formData[key];
                        if (key !== "houseType" && key !== "details"){
                            return(                           
                                <label key={key}>{label}
                                <Input 
                                    key={key}
                                    placeholder={label} 
                                    value={value}
                                    validations={validations}
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
                                        style={{outline:'none', resize:'none', height:'8rem', fontSize:'1rem'}}
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