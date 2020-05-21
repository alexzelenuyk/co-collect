import * as React from "react";
import {StyleSheet, Text, View} from "react-native";

export const GenerateScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Scan the code QR code to generate your personal QR code</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
