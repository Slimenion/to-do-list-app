import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AddForm } from "./components/AddForm";

import { Header } from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: "Стать богом", index: "1" },
        { text: "Снова стать человеком", index: "2" },
        { text: "Понять что ты уже выше обоих ипстасий", index: "3" },
    ]);

    return (
        <View style={styles.MainStyle}>
            <Header />
            <AddForm />
            <FlatList
                data={listOfItems}
                renderItem={({ item }) => <ListItem el={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    MainStyle: {
        height: "100%",
        backgroundColor: "#D4F2EF",
    },
});
