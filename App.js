import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { AddForm } from "./components/AddForm";

import { Header } from "./components/Header";
import ListItem from "./components/ListItem";

export default function App() {
    const [listOfItems, setListOfItems] = useState([
        {
            text: "Стать богом",
            key: "1",
            checkStatus: require("./assets/unCheck.png"),
            textCross: styles.textNoCross,
            trashStatus: require("./assets/TrashNoGlow.png"),
        },
        {
            text: "Снова стать человеком",
            key: "2",
            checkStatus: require("./assets/unCheck.png"),
            textCross: styles.textNoCross,
            trashStatus: require("./assets/TrashNoGlow.png"),
        },
        {
            text: "Понять что ты уже выше обоих ипостасий",
            key: "3",
            checkStatus: require("./assets/unCheck.png"),
            textCross: styles.textNoCross,
            trashStatus: require("./assets/TrashNoGlow.png"),
        },
    ]);

    const addHendler = (text) => {
        setListOfItems((list) => {
            if (text == "") {
                return [...list];
            } else {
                return [
                    {
                        text: text,
                        key: Date.now().toString(),
                        checkStatus: require("./assets/unCheck.png"),
                        textCross: styles.textNoCross,
                        trashStatus: require("./assets/TrashNoGlow.png"),
                    },
                    ...list,
                ];
            }
        });
    };

    const checkImage = (key, text) => {
        setListOfItems((list) => {
            var newList = list.filter((listOfItems) => listOfItems.key != key);

            return [
                ...newList,
                {
                    key: key,
                    text: text,
                    checkStatus: require("./assets/check.png"),
                    textCross: styles.textCross,
                    trashStatus: require("./assets/TrashGlow.png"),
                },
            ];
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
                    <ListItem
                        el={item}
                        deleteHandler={deleteHandler}
                        checkImage={checkImage}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    textCross: {
        textDecorationLine: "line-through",
    },
    textNoCross: {
        textDecorationLine: "none",
    },
    MainStyle: {
        height: "100%",
        backgroundColor: "#D4F2EF",
    },
});
