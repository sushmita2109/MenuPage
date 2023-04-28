import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Cart } from "./components/Cart";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
