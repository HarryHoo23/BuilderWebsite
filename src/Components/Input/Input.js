import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    color: red;
`

export default class Input extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dirty: false,
        };
    }
    
    isValidationInvalid(validation) {
        const { value } = this.props;
        const { validator } = validation;
        
        let message;

        if (validator === "isNotEmpty") {
            const valid = !!this.props.value;
            if(!valid) {
                ({ message } = validation);
            }
        }

        if (validator === "isEmail"){
            const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
            const valid = EMAIL_REGEX.test(value);

            if(!valid) {
                ({ message } = validation);
            }
        }

        return message;
    };

    getValidationMessageFromValidations(){
        const { validations } = this.props;

        const invalidValidation = validations.find((validation) => this.isValidationInvalid(validation));
        
        return invalidValidation && invalidValidation.message;
    }

    render(){
        const validationMessage = this.getValidationMessageFromValidations();
        const dirty = this.state.dirty;
        return(
            <div>
                <input
                    {...this.props} 
                    onChange={(event) => {
                        this.setState({
                            dirty:true,
                        });
                    this.props.onChange(event);
                    }}
                />
                {dirty && validationMessage && (
                    <ErrorMessage>{validationMessage}</ErrorMessage>
                )}
            </div>
        )
    }
}
