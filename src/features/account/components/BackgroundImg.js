import React from "react";
// import { View } from "react-native";
import styled from "styled-components/native";
import bg from "./../../../../assets/bg.jpeg";
import { Button } from "react-native-paper";

const Bg = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const BgGradient = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.4);
`;

const ChildrenContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthBtn = styled(Button)`
  padding: ${(props) => props.theme.space[2]};
`;

function BackgroundImg({ children }) {
  return (
    <Bg source={bg} resizeMode="cover">
      <BgGradient></BgGradient>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Bg>
  );
}

export default BackgroundImg;
