import React, { useState, useContext } from 'react'
import { CartContext } from '../../Context/CartContext';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

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
            buyer: { name, phone },
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
        <form action="" onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Complete Name"
                value={name}
                onChange={handleName}
                required
            />
            <input
                type="number"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={handlePhone}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
                required
            />
            <button>Send</button>
        </form>
    );
};

export default Form;