import React, { createContext, useState } from "react";

//      Creo el contexto  y lo exporto
export const CartContext = createContext(); 

//      Creo el componente que va a contener la lógica, 
// y servirá para distribuir la información a los demás componentes

////    Estados
////    Funciones que manejen mi estado

//Va a retornar y a envolver al proveedor que ya tengo en mi contexto
//Esto es para que contenga todos los estados y funciones que requiera para su posterior distribución.

//////      RESPONSABILIDAD: Funcionalidad de cart      //////

// recibe props y dentro children, pero para este caso aplico destructuring para simplificar
const CartProvider = ({children}) => {
    
    ////    Contendrá: ESTADOS, OBJETOS y FUNCIONES     ////
    
    // ->  Aquí declararé la lógica del carrito //
    
    
    //Inicializo el carrito como un arrayvacío
    const  [cart, setCart ] = useState([]);  

    
    //  -> Función que limpia el carrito y lo deja vacío
    const clearCart = () => setCart([]); 

    //  -> Función para encontrar si el producto ya está en el carrito. Si está devuelve true, sino false
    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false; 
    }

    //  -> Función para remover un producto del carrito
    //Es decir, obtiene todos los productos que NO tengan ese id y lo guarda en el carrito
    const removeItem = (id) => {
        return setCart(cart.filter(product => product.id !== id));
    }

    //  -> Función para agregar productos al carrito
    const addToCart = (item, quantity) => {
        //Si el producto está en el carrito
        if (isInCart(item.id)) {
            //creo un nuevo array con el map
            setCart(cart.map(product => {
                //Si el id del producto coincide con el id del item del carrito, me copio todos
                //Si no son iguales, dejalos tal como están
                // Los que no son iguales, quedan tal cual estaban
                //Pero el que sea igual, copia el producto tal cual está y al quantity lo incrementa con el nuevo valor de quantity
                return product.id === item.id ? {   ...product, quantity: product.quantity + quantity} : product
            }));
        } else {
            //Si el producto no está en el carrito
            //Creo un nuevo array con todos los objetos que ya estaban, 
            //Creo un nuevo objeto con los mismos campos que tenía el item, y le agrego el campo quantity. (esto último es como hacer quantity: quantity)
            setCart([...cart, { ...item, quantity }]);
        }
    }
    

    
    console.log('carrito: ', cart);

    
    return (
        //En value le puedo pasar Estados, Objetos, Funciones
        //En este caso le paso un objeto con las funciones
        //Los objetos son clave valor (ej: clearCart: clearCart), pero al ser js moderno basta con escribirlo una sola vez clearCart
        <CartContext.Provider value={{
            isInCart,
            addToCart,
            removeItem,
            clearCart
        }}>
            {children};
        </CartContext.Provider>
    )
}

export default CartProvider;


//// Los componentes hijos que están envueltos por sus componentes padres generan un objeto "children"
// Desde el componente padre se recibe como una prop, en este caso props.children
// children es una palabra reservada.

//Concepto: children son los hijos que le llega al componente que está envolviendo

//CartContext.Provider siempre deber tener un value para pasar.
//Todo lo que pase por value, lo voy a poder acceder desde mis hijos
//value es palabra reservada