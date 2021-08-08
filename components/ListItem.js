import React from "react";

import {
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
} from "react-native";

export default function ListItem({ el }) {
    return (
        <View>
            <TouchableHighlight>
                <Text style={styles.todoStyle}>{el.text}</Text>
            </TouchableHighlight>
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
    },
});
