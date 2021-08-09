import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AddForm } from "./components/AddForm";

import { Header } from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        { text: "Стать богом", key: "1" },
        { text: "Снова стать человеком", key: "2" },
        {
            text: "Понять что ты уже выше обоих ипостасий",
            key: "3",
        },
    ]);

    const addHendler = (text) => {
        setListOfItems((list) => {
            return [{ text: text, key: Date.now().toString() }, ...list];
        });
    };

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter((listOfItems) => listOfItems.key != key);
        });
    };

    return (
        <View style={styles.MainStyle}>
            <Header />
            <AddForm addHendler={addHendler} />
            <FlatList
                data={listOfItems}
                renderItem={({ item }) => (
                    <ListItem el={item} deleteHandler={deleteHandler} />
                )}
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
