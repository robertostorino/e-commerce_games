import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import {Form, Label, TermsContainer, ButtonCenteredContainer, Button, MessageSuccess, MessageError} from './../../elements/Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

import Input from './Input';

const FormMain = ({ handleId }) => {
    const [name, setName] = useState({field: '', valid: null});
    const [phone, setPhone] = useState({field: '', valid: null});
    const [email, setEmail] = useState({field: '', valid: null});
    const [email2, setEmail2] = useState({field: '', valid: null});
    const { totalPrice, cart } = useContext(CartContext);
    const total = totalPrice();
    const [terms, setTerms] = useState(false);
    const [formValid, setFormValid] = useState(null);

    const expressions = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letters, numbers, dash middle and dash under
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letters and spaces, are avalable to have accent.
        password: /^.{4,12}$/, // 4 to 12 digits.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/ // 7 to 14 digits.
    }

    const validateEmail2 = () => {
        if(email.field.lenght > 0){
            if(email.field !== email2.field){
                setEmail2((prevState) => {
                    return {...prevState, valid: 'false'}
                });
            } else {
                setEmail2((prevState) => {
                    return {...prevState, valid: 'true'}
                });
            }
        }
    }

    const onChangeTerms = (e) => {
        setTerms(e.target.checked);
    }

    const onSubmit = (e) => {
        e.preventDefault(); //Prevents side effect of submit by default. Otherwise it will restart

        if(
            name.valid === 'true' &&
            phone.valid === 'true' &&
            email.valid === 'true' &&
            email2.valid === 'true' &&
            terms
        ){
            //buyer order
            const order = {
                buyer: { name, phone, email },
                date: serverTimestamp(), //firestore function. Save datetime of the generated order.
                cart,
                total,
            };
            const querydb = getFirestore()
            const orderReference = collection(querydb, 'orders'); //Apunto a la colección donde iré guardando las órdenes
            addDoc(orderReference, order).then((response) => {
                handleId(response.id);
            });

            //Set blank fields
            setFormValid(true);
            setName({field: '', valid: null});
            setEmail({field: '', valid: null});
            setEmail2({field: '', valid: null});
            setPhone({field: '', valid: null});
        } else {
            setFormValid(false);
        }
    }

    return (
        <main>
            <Form action='' onSubmit={onSubmit}>
                <Input 
                    state={name}
                    setState={setName}
                    type="text"
                    label="Name"
                    placeholder="Enter your name"
                    name="name"
                    leyendError="Name can only contain letters and spaces."
                    regularExpression={expressions.name}
                />
                <Input 
                    state={phone}
                    setState={setPhone}
                    type="text"
                    label="Phone"
                    placeholder="Enter your phone number"
                    name="phone"
                    leyendError="Phone can only contain numbers and max 14 digits."
                    regularExpression={expressions.phone}
                />
                <Input 
                    state={email}
                    setState={setEmail}
                    type="email"
                    label="E-Mail"
                    placeholder="john@doe.com"
                    name="email"
                    leyendError="Email can only contain char, numbers, dot, dash middle and dash under."
                    regularExpression={expressions.email}
                />
                <Input 
                    state={email2}
                    setState={setEmail2}
                    type="email"
                    label="Repeat your E-Mail"
                    placeholder="john@doe.com"
                    name="email"
                    leyendError="Both e-mails must be the same."
                    regularExpression={expressions.email}
                    functioA={validateEmail2}
                />
                <TermsContainer>
                    <Label>
                        <input 
                            type="checkbox"
                            name="terms"
                            id="terms"
                            checked={terms}
                            onChange={onChangeTerms}
                        />
                        I accept Terms and Conditions
                    </Label>
                </TermsContainer>
                {formValid === false && <MessageError>
                        <p>
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            <b>Error:</b> Please, fill out the form correctly.
                        </p>
                    </MessageError>}
                <ButtonCenteredContainer>
                    <Button type="submit">Submit</Button>
                    {formValid === true && <MessageSuccess>Form sent successfully</MessageSuccess>}
                </ButtonCenteredContainer>
            </Form>
        </main>
    );
}

export default FormMain;