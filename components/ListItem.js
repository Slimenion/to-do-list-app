import React from "react";

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
    Alert,
    TouchableWithoutFeedback,
} from "react-native";

export default function ListItem({ el, deleteHandler }) {
    var CheckImage = require("../assets/unCheck.png");

    const Check = () => {
        CheckImage = require("../assets/check.png");
    };

    return (
        <View style={styles.todoStyle}>
            <View style={styles.textAndImage}>
                <TouchableWithoutFeedback onPress={Check}>
                    <Image style={styles.imageStyle} source={CheckImage} />
                </TouchableWithoutFeedback>
                <Text numberOfLines={1} style={styles.textStyle}>
                    {el.text}
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => deleteHandler(el.key)}>
                <Image
                    style={styles.trashStyle}
                    source={require("../assets/TrashNoGlow.png")}
                />
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    todoStyle: {
        padding: 15,
        backgroundColor: "#fff",
        marginTop: 4,
        marginHorizontal: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    textAndImage: {
        flexDirection: "row",
    },
    imageStyle: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    trashStyle: {
        width: 20,
        height: 20,
    },
    textStyle: {
        width: "85%",
    },
});
