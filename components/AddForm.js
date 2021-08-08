import React from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

export function AddForm() {
    return (
        <View style={styles.PositionItems}>
            <TextInput
                placeholder="Введите ваше новое дело..."
                style={styles.TextInputView}
            />
            <Button
                style={styles.ButtonView}
                color="#2E8986"
                title="Добавить"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    PositionItems: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    ButtonView: {},
    TextInputView: {
        width: "80%",
        marginRight: 20,
        borderBottomWidth: 1,
        paddingRight: 50,
        borderBottomColor: "#2E8986",
    },
});
