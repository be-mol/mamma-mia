import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../MyContext";

const Pizzas = () => {
    const [pizzaDetalle, setPizzaDetalle] = useState({});
    const { pizzas, addToCart } = useContext(MyContext);
    const { id } = useParams();

    const getData = () => {
        const pizzaData = pizzas.find((pizza) => pizza.id === id);
        setPizzaDetalle(pizzaData);
    };

    useEffect (() => {
        getData();
    }, [pizzas]);

    return (
        <div className="container mt-5">
            <div className="card mb-3 estilos">
                <div className="row g-0">
                    <div className="col-md-6">
                        <img src={pizzaDetalle.img} className="img-fluid estilos rounded-start" alt={pizzaDetalle.name}/>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title text-capitalize">
                                {pizzaDetalle.name}
                            </h5>
                            <p className="card-text">{pizzaDetalle.desc}</p>
                            <ul>
                                {pizzaDetalle.ingredientes?.map((ingredient, i) => (
                                    <li key={i}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                            <div className="d-flex justify-content-around">
                                <h4>Precio: ${pizzaDetalle.price}</h4>
                                <button className="btn btn-danger" onClick={() => addToCart(pizzaDetalle)}>Añadir</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pizzas