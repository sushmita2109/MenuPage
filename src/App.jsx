import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
