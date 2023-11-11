import "reflect-metadata";
import React from "react";
import AppNavigator from "./ui/navigation/AppNavigator";
import { NavigationContainer } from "@react-navigation/native";

function App() {
    return (
        <NavigationContainer>
            <AppNavigator />
        </NavigationContainer>
    );
}

export default App;
