import React from 'react';
import { Input, Label, GruopInput, LeyendError, IconValidation } from './../../elements/Forms';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const InputComponent = ({ state, setState, type, label, placeholder, name, leyendError, regularExpression, functionA}) => {
    const onChange = (e) => {
        setState({ ...state, field: e.target.value })
    }

    const validate = () => {
        if(regularExpression){
            if(regularExpression.test(state.field)){
                setState({...state, valid: 'true'})
            } else {
                setState({...state, valid: 'false'})
            }
        }

        if(functionA){
            functionA();
        }
    }

    return (
        <div>
            <Label htmlFor={name} valid={state.valid}>{label}</Label>
            <GruopInput>
                <Input 
                    type={type}
                    placeholder={placeholder}
                    id={name}
                    value={state.field}
                    onChange={onChange}
                    onKeyUp={validate}
                    onBlur={validate}
                    valid={state.valid}
                />
                <IconValidation 
                    icon={state.valid === 'true' ? faCheckCircle : faTimesCircle}
                    valid={state.valid}
                />
            </GruopInput>
            <LeyendError valid={state.valid}>{leyendError}</LeyendError>
        </div>
    );
}

export default InputComponent;