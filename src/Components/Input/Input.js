import React, { Component } from 'react';
import styled from 'styled-components';

const ErrorMessage = styled.p`
    color: red;
`

export default class Input extends Component {
    getValidationMessage() {
        const { validation } = this.props;
        const { validator } = validation;
        
        let message;

        if (validator === "isNotEmpty") {
            const valid = !!this.props.value;
            if(!valid) {
                ({ message } = validation);
            }
        }

        return message;
    };

    render(){
        const validationMessage = this.getValidationMessage();

        return(
            <div>
                <input {...this.props} />
                {validationMessage && (
                    <ErrorMessage>{validationMessage}</ErrorMessage>
                )}
            </div>
        )
    }
}
