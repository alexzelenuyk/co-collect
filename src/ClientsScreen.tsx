import * as React from "react";
import {ActivityIndicator, Text, View} from "react-native";
import {listContacts} from "./graphql/queries";
import {API, graphqlOperation} from 'aws-amplify'
import {styles} from "./styles";
import {useEffect} from "react";
import {useState} from "react";
import {ListItem} from "react-native-elements";

export const ClientsScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await API.graphql(graphqlOperation(listContacts));
            setContacts(result["data"]["listContacts"]["items"]);
        })();
    }, []);

    if (!contacts) {
        return <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large"/>
        </View>
    }

    return (
        <View>
            {contacts && contacts.map((contact, key) => (
                <ListItem
                    key={key}
                    title={
                        `${new Date(contact.createdAt).toLocaleDateString()}: ${contact.firstName} ${contact.lastName}`
                    }
                    bottomDivider
                />
            ))}
        </View>
    )
};