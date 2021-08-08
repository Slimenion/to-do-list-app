import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import SafeViewAndroid from "../styles/SafeViewAndroid";

export function Header() {
    return (
        <SafeAreaView
            style={[SafeViewAndroid.AndroidSafeArea, styles.headerStyle]}
        >
            <Text style={styles.textheaderStyle}>
                Планы ближайшего будущего
            </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerStyle: {
        paddingTop: 50,
        backgroundColor: "#2E8986",
        alignItems: "center",
        width: "100%",
        paddingBottom: 20,
    },
    textheaderStyle: {
        fontWeight: "bold",
        fontSize: 24,
        color: "#FFFEFF",
    },
});
