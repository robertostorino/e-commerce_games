import { createContext } from "react";

//      Creo el contexto  y lo exporto
export const CartContext = createContext(); 

//      Creo el componente que va a contener la lógica, 
// y servirá para distribuir la información a los demás componentes

////    Estados
////    Funciones que manejen mi estado

//Va a retornar y a envolver al proveedor que ya tengo en mi contexto
//Esto es para que contenga todos los estados y funciones que requiera para su posterior distribución.
const CartProvider = (props) => {
    return (
        <CartContext.Provider>
            {props.children};
        </CartContext.Provider>
    )
}

export default CartProvider;


//// Los componentes hijos que están envueltos por sus componentes padres generan un objeto "children"
// Desde el componente padre se recibe como una prop, en este caso props.children
// children es una palabra reservada.

//Concepto: children son los hijos que le llega al componente que está envolviendo