import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

export const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>
                Co-collect - is an APP to collect a visitor information while visiting restaurants or any other places.
            </Text>
            <Button
                title="Scan Personal Code"
                onPress={() => navigation.navigate('Scan')}
            />
            <Button
                title="Generate Personal Code"
                onPress={() => navigation.navigate('Generate')}
            />
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
