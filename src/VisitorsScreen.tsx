import * as React from "react";
import {ActivityIndicator, View} from "react-native";
import {listContacts} from "./graphql/queries";
import {API, graphqlOperation} from 'aws-amplify'
import {styles} from "./styles";
import {useEffect} from "react";
import {useState} from "react";
import {Text, ListItem} from "react-native-elements";

export const VisitorsScreen = () => {
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
            <Text h2={true} style={styles.title}>Recent visitors:</Text>

            {contacts.map(({name, address, zip, city, createdAt}, key) => (
                <ListItem
                    key={key}
                    title={`${name} ${address} ${zip} ${city}`}
                    subtitle={new Date(createdAt).toLocaleDateString()}
                    leftIcon={{ name: 'check' }}
                    bottomDivider={true}
                />
            ))}
            {contacts.length == 0 && <Text>not available</Text>}
        </View>
    )
};