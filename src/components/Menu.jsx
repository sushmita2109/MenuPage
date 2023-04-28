import { useMenu } from "../context/MenuContext";
import { InputComponent } from "./InputComponent";
export const Menu = () => {
  const { menuData } = useMenu();
  return (
    <div>
      <h1>Menu</h1>
      <InputComponent />
      {menuData.map((menu) => (
        <li key={menu.id}>
          <img src={menu.image} alt="menuimage" width="250px" />
          <p>Name:{menu.name}</p>
          <p>
            <strong>Description</strong>
            {menu.description}
          </p>
          <p>Price:{menu.price}</p>
          <p>Delivery Time:{menu.delivery_time}</p>
          <button>Add to Cart</button>
        </li>
      ))}
    </div>
  );
};
