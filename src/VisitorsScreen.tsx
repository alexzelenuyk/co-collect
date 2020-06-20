import * as React from "react";
import {ActivityIndicator, View} from "react-native";
import {listContacts} from "./graphql/queries";
import {API, graphqlOperation} from 'aws-amplify'
import {styles} from "./styles";
import {useEffect} from "react";
import {useState} from "react";
import {ListItem} from "react-native-elements";

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
            {contacts.map(({firstName, lastName, createdAt}, key) => (
                <ListItem
                    key={key}
                    title={`${firstName} ${lastName}`}
                    subtitle={new Date(createdAt).toLocaleDateString()}
                    leftIcon={{ name: 'check' }}
                    bottomDivider={true}
                />
            ))}
        </View>
    )
};