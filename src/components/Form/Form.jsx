import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

import './Form.css'

const Form = ({ handleId }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { totalPrice, cart } = useContext(CartContext);
    const total = totalPrice();

    const handleSubmit = (e) => {
        e.preventDefault(); //Me ayuda a prevenir efecto que tiene el submit por defect, ya que sino se reiniciaría
        
        //Orden para el comprador
        const order = {
            buyer: { name, phone, email },
            date: serverTimestamp(), //función propia de firestore. Me guarda la fecha y hora de emisión de la orden
            cart,
            total,
        };
        const querydb = getFirestore()
        const orderReference = collection(querydb, 'orders'); //Apunto a la colección donde iré guardando las órdenes
        addDoc(orderReference, order).then((response) => {
            handleId(response.id);
        });
    };

    const handleName = (e) => setName(e.target.value);

    const handlePhone = (e) => setPhone(e.target.value);

    const handleEmail = (e) => setEmail(e.target.value);

    return (
        <div className='container col-md-2 my-5 container-form'>
            <form className='row gy-2 gx-3 align-items-center'action="" onSubmit={handleSubmit}>
            <div className='col-auto'>
                <label className='visually-hidden' for='autoSizingInput'>Name</label>
                <input
                    className='form-control'
                    id='autoSizingInput'
                    type="text"
                    name="name"
                    placeholder="Complete Name"
                    value={name}
                    onChange={handleName}
                    required
                />
            </div>
            
            <div className='col-auto'>
                <label className='visually-hidden' for='autoSizingInput'>Phone</label>
                <input
                className='form-control'
                id='autoSizingInput'
                type="number"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handlePhone}
                required
                />
            </div>

            <div className='col-auto'>
                <label className='visually-hidden' for='autoSizingInput'>Email</label>
                <input
                className='form-control'
                id='autoSizingInput'
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
                />
            </div>
            <div className='col-auto'>
                <button type="submit" className='btn btn-primary'>Generate id</button>
            </div>
        </form>
        </div>
    );
};

export default Form;