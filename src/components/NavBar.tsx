import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import AuthenticationButton from "./buttons/AuthenticationButton";
import { Flex, Image, Navbar, Text } from "@mantine/core";
import { OneRingInscription } from "./Images";

export interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = (props) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }
  return (
    <Navbar
      height={"4rem"}
      p={"md"}
      style={{ borderBottom: "1px solid lightGray " }}
    >
      <Navbar.Section>
        <Flex justify={"space-between"} align={"center"}>
          <Flex direction={"row"} gap={"md"}>
            <Link to="/">
              <OneRingInscription width={"45"} height={"45"}/>
            </Link>
          </Flex>
          <AuthenticationButton />
        </Flex>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavBar;
