import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { AddForm } from "./components/AddForm";

import { Header } from "./components/Header";

export default function App() {
    return (
        <View style={styles.MainStyle}>
            <Header />
            <AddForm />
        </View>
    );
}

const styles = StyleSheet.create({
    MainStyle: {
        height: "100%",
        backgroundColor: "#D4F2EF",
    },
});
