import { createContext, useState, useEffect } from "react";

const MyContext = createContext();

//Provider
const PizzasProvider = ({children}) => {
    const [pizzas, setPizzas] = useState([]);
    const [carro, setCarro] = useState ([]);

//llamado a la función que consume la api
useEffect (() => {
    getPizzas();
}, [])
//función que consulta la api
const getPizzas = async () => {
    const resPizzas = await fetch("/pizzas.json");
    const dataPizzas = await resPizzas.json();
    setPizzas(dataPizzas)
}

//funciones del carro
const addToCart = ({id, price, name, img}) => {
    const productFoundIndex = carro.findIndex((p) => p.id === id);
    const producto = {id, price, name, img, count:1};

    if (productFoundIndex >= 0) {
        carro[productFoundIndex].count++;
        setCarro([...carro]);
    } else {
        setCarro([...carro, producto]);
    }
};

const increment = (i) => {
    carro[i].count++;
    setCarro([...carro]);
};

const decrement = (i) => {
    const { count } = carro[i];
    if (count === 1) {
        carro.splice(i, 1)
    } else {
        carro[i].count--;
    }
    setCarro([...carro])

}

console.log(carro);
return (
    <MyContext.Provider value={{pizzas, carro, setCarro, addToCart, increment, decrement}}>
        {children}
    </MyContext.Provider>
)


}

export {PizzasProvider}

export default MyContext