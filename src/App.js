import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./views/Home";
import Pizzas from "./views/Pizzas";
import Carro from "./views/Carro";


import Navbar from "./components/Navbar";
import {PizzasProvider} from "./MyContext";

function App() {
  return (
    <BrowserRouter>
      <PizzasProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizzas/:id" element={<Pizzas />} />
          <Route path="/carro" element={<Carro />} />
        </Routes>
      </PizzasProvider>
    </BrowserRouter>
  );
}

export default App;