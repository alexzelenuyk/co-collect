import * as React from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";
import {styles} from "./styles";

export const HomeScreen = ({ navigation }) => {
    const switchView = (view) => navigation.navigate(view);

    return (
        <View style={styles.container}>
            <Text h4={true} style={styles.text}>
                Co-collect - is an APP to collect a visitor information while visiting restaurants or any other places.
            </Text>

            <Button
                title="Scan Personal Code"
                onPress={() => switchView('Scan')}
                style={styles.button}
            />

            <Button
                title="Generate Personal Code"
                onPress={() =>switchView('Generate')}
                style={styles.button}
            />
        </View>
    );
};
