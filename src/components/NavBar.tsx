import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./buttons/AuthenticationButton";
import { Flex, Text } from "@mantine/core";
import { OneRingInscription } from "./Images";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }
  return (
    <div className="navBar">
      <Flex justify={"space-between"} align={"center"}>
        <Flex direction={"row"} gap={"md"}>
          <Link to="/">
            <OneRingInscription width={"45"} height={"45"} />
          </Link>
        </Flex>
        <Flex direction={"row"} gap={"md"} align={"center"}>
          <Text size={"sm"}>Welcome! {user?.name}</Text>
          <AuthenticationButton />
        </Flex>
      </Flex>
    </div>
  );
};

export default NavBar;
