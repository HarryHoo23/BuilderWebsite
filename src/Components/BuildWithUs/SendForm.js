import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../Input/Input';
import M from 'materialize-css';
import { USER_ID, TEMPLATE_ID, SERVICE_ID } from './keys';
import * as emailjs from 'emailjs-com';

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
                    label: 'Your Name',
                    placeHolder: 'Please Enter Your Name',
                    icon: 'mode_edit', 
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Name'
                    }],
                },
                phone : {
                    value: '',
                    label: 'Phone Number',
                    placeHolder: 'Please Enter Your Phone Number',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Phone Number'
                    }],
                },
                email : {
                    value: '',
                    label: 'Email Address',
                    placeHolder: 'Please Enter Your Email-Address',
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
                    placeHolder: 'Please Enter the Project Address',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Project Address'
                    }],
                },
                budget : {
                    value: '',
                    label: 'Enter Your Budget',
                    placeHolder: 'Please Enter Your Budget',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please Enter Your Budget'
                    }],
                },
                houseType : {
                    value: '',
                    label: 'Choose the House Type',
                    placeHolder: 'Please Choose Your HouseType',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please choose the house Type you prefer'
                    }],
                },
                details : {
                    value: '',
                    label: 'Project Details',
                    placeHolder: 'Please Tell us more Details',
                    validations: [{
                        validator:'isNotEmpty',
                        message: 'Please input the details of your Projects'
                    }],
                },
            }
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount(){
        let elems = document.querySelectorAll('.modal');
        M.Modal.init(elems, {inDuration:300});
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

        const content = `Hi, \n this is ${quote.clientName}, I would like to know more about ${quote.clientHouseType}.
        My budget is ${quote.clientBudget}, project address is ${quote.clientProjectAddress}. \n Here is more details: ${quote.clientDeatilsAboutProject};
        \n please call me back at ${quote.clientPhoneNumber}`

        var template_params = {
            "reply_to": quote.clientEmail,
            "from_name": quote.clientName,
            "to_name": "Harry Hu",
            "message_html": content
        }

        // if (!quote.clientName && !quote.clientPhoneNumber && !quote.clientEmail && !quote.clientProjectAddress && !quote. )

        emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            template_params,
            USER_ID
        ).then((res)=> {
            console.log(res);
        }, (err) => {
            console.log(err)
        })
    }

    renderModal(){
        if(!true){
            return (
                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4>You must Enter all the Fileds!</h4>
                    <p>Please Check if you missed something.</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat green">OK</a>
                    </div>
                </div>
            )
        } else {
            return(
                <div id="modal1" className="modal">
                    <div className="modal-content">
                    <h4>Your Request Has Been Sent Successfully!</h4>
                    <p>We will get back to you soon!</p>
                    </div>
                    <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat green">OK</a>
                    </div>
                </div>
            )
        }
    }
    
    render() {
        const { formData } = this.state;
        return(
            <Layout className="col s12 m12 l6" style={{padding:'2rem'}}> 
                <div style={{width:'100%', textAlign:'center', marginBottom:'2rem'}}>                
                    <h5 style={{display:'inline-block'}}>Send Message</h5>
                </div>    
                <form onSubmit={this.onFormSubmit}>            
                    {Object.keys(formData).map((key) => {
                        const {label, value, validations, placeHolder} = formData[key];
                        if (key !== "houseType" && key !== "details"){
                            return(                           
                                <label key={key}>{label}
                                <Input 
                                    key={key}
                                    placeholder={placeHolder} 
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
                    <Button className="btn waves-effect waves-light btn modal-trigger" 
                            type="submit" 
                            onClick={this.onFormSubmit}
                            data-target="modal1" 
                            disabled={!this.state.formData.email.value 
                                    || !this.state.formData.name.value 
                                    || !this.state.formData.phone.value 
                                    || !this.state.formData.address.value
                                    || !this.state.formData.houseType.value
                                    || !this.state.formData.details.value
                                    || !this.state.formData.budget.value}
                    >
                        Submit
                        <i className="material-icons right">send</i>
                    </Button>
                </form>
                <div>{this.renderModal()}</div>
            </Layout>
        )
    }    
}

export default SendForm;