import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DrawerNavigator, DrawerItems } from "react-navigation";
import HomeStackNav from "components/navigation/home-stack-navigator";
import { COLORS } from "constants/styles";
import styled from "styled-components";

const DrawerContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BRIGHT_GREY};
`;

const AppContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.GREY.BLACK_RUSSIAN};
`;

const drawerRouteConfig = {
  Home: {
    screen: HomeScreen
  }
};

const CustomDrawerContentComponent = props => (
  <DrawerContainer>
    <DrawerItems {...props} />
  </DrawerContainer>
);

const drawerNavConfig = {
  contentComponent: props => <CustomDrawerContentComponent {...props} />
};

export default function App() {
  return (
    <AppContainer>
      <StatusBar hidden={true} />
      <AppDrawer />
    </AppContainer>
  );
}
