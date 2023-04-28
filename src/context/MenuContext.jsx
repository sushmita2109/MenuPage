import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fakeFetch } from "../data/fakeFetch";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [menuData, setMenuData] = useState([]);

  const getData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/menu");
      if (res.status === 200) {
        setMenuData(res.data.menu);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <MenuContext.Provider value={{ menuData }}>{children}</MenuContext.Provider>
  );
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMenu = () => useContext(MenuContext);
