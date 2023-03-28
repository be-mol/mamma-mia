import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { formatNumber } from "../Helper";
import MyContext from "../MyContext";


const Card = () => {
    const { pizzas, addToCart} = useContext(MyContext);
    const navigate = useNavigate();
    return (
        <div className="wrapper">
            {pizzas.map((pizza) => (
                <div className="col" key={pizza.id}>
                    <div className="card">
                        <img className="card-img-top" src={pizza.img} alt="" />
                        <div className="card-body">
                            <h4 className="card-title text-capitalize">{pizza.name}</h4>
                            <hr />
                            <p className="card-text">
                                <b>Ingredientes:</b>
                            </p>
                            <ul>
                                {pizza.ingredients.map((ingredient, i) => (
                                    <li key={i}>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <h2 className="text-center text-dark pb-3">
                            Precio: ${formatNumber(pizza.price)}
                        </h2>

                        <div className="d-flex justify-content-around mb-4">
                            <button to={`/pizza/${pizza.id}`} className="btn btn-info text-white" onClick={() => navigate(`/pizzas/${pizza.id}`)}>Ver más</button>
                            <button className="btn btn-danger" onClick={() => addToCart(pizza)}>Añadir</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card