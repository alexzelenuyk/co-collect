import {Button, StyleSheet, Text, View} from "react-native";
import * as React from "react";

import { createContact } from "./graphql/mutations";
import { API, graphqlOperation } from 'aws-amplify'

async function addContact() {
    try {
        const contact = {
            gender: "male",
            firstName: "Max",
            lastName: "Mustermann",
            zip: "22764",
            city: "Hamburg",
            phone: "0401234567890"
        };
        await API.graphql(graphqlOperation(createContact, {input: contact}))
    } catch (err) {
        console.log('error creating contacts:', err)
    }
}

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
            <Button
                title="Create Contact"
                onPress={addContact}
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
