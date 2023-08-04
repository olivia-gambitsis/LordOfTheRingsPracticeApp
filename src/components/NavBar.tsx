import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { LogoutButton } from "./buttons/LogoutButton";
import { LoginButton } from "./buttons/LoginButton";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {

  const {user, isLoading, isAuthenticated} = useAuth0()
  console.log(isAuthenticated)
  return (
    <div>
      {/* <Link to="/">
        Home
      </Link> */}
      <ul className="flex flex-row gap-10">
        {/* <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/something">Something</Link>
        </li>
        <li>
          <Link to="/something-else">Something else</Link>
        </li> */}
        <li>
          {isAuthenticated ? <LogoutButton/> : <LoginButton/>}
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
