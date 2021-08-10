import React, { useState } from "react";

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
    Alert,
    TouchableWithoutFeedback,
} from "react-native";

export default function ListItem({ el, deleteHandler, checkImage }) {
    return (
        <View style={styles.todoStyle}>
            <View style={styles.textAndImage}>
                <TouchableWithoutFeedback
                    onPress={() => checkImage(el.key, el.text)}
                >
                    <Image style={styles.imageStyle} source={el.checkStatus} />
                </TouchableWithoutFeedback>
                <Text
                    numberOfLines={1}
                    style={[el.textCross, styles.textStyle]}
                >
                    {el.text}
                </Text>
            </View>
            <TouchableWithoutFeedback onPress={() => deleteHandler(el.key)}>
                <Image style={styles.trashStyle} source={el.trashStatus} />
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
