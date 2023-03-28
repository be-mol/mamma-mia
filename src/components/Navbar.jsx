import { Link } from "react-router-dom";
import { useContext } from "react";
import MyContext from "../MyContext";
import { formatNumber } from "../Helper";

const Navbar = () => {
    const { carro } = useContext(MyContext);
    const total = carro.reduce(
      (valorAnterior, { count, price }) => (valorAnterior + price) * count,0
      );
      
    return (
      <div className="navbar text-white py-3 bg-info">
        <div className="container d-block">
          <div className="d-flex justify-content-between">            
              <h4>🍕<Link to="/" >Pizzería Mamma Mia!</Link></h4>        
  
            
              <h4>🛒<Link to="/carro">Total: ${formatNumber(total)}</Link></h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default Navbar;