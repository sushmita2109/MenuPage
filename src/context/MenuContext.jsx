import { createContext, useContext } from "react";
import PropTypes from "prop-types";

export const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  return <MenuContext.Provider>{children}</MenuContext.Provider>;
};

MenuProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useMenu = () => useContext(MenuContext);
