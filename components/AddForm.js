import React, { useState } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

export function AddForm({ addHendler }) {
    const [text, setValue] = useState("");

    const pressHandelr = (text) => {
        addHendler(text);
        setValue("");
    };

    return (
        <View style={styles.PositionItems}>
            <TextInput
                placeholder="Введите ваше новое дело..."
                style={styles.TextInputView}
                onChangeText={setValue}
                value={text}
            />
            <Button
                style={styles.ButtonView}
                color="#2E8986"
                title="Добавить"
                onPress={() => pressHandelr(text)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    PositionItems: {
        paddingVertical: 10,
        flexDirection: "row",
        justifyContent: "center",
    },
    ButtonView: {
        width: "30%",
    },
    TextInputView: {
        width: "60%",
        marginRight: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#2E8986",
    },
});
