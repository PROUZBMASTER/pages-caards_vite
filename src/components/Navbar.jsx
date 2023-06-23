import { NavLink } from "react-router-dom";
import { Navs } from "../utils/Constants";
const Navbar = () => {
  const styles = ({ isActive }) => {
    return {
      opacity: isActive ? "0.7" : "1",
      color: isActive ? "green" : "",
    };
  };
  return (
    <nav className="border-b-2 mx-auto py-[10px] px-[30px] flex justify-center items-center">
      <ul className="flex">
        {Navs.map((value, index) => {
          return (
            <li className="mx-[10px]" key={index}>
              <NavLink style={styles} to={value.path}>
                {value.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
