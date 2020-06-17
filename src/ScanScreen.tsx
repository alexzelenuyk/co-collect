import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {BarCodeScanner} from 'expo-barcode-scanner';
// import { API, graphqlOperation } from 'aws-amplify'
// import { createContact } from "./graphql/mutations";
// // import { listContacts } from "./graphql/queries";
//
// async function addContact() {
//     try {
//         // const todo = { ...formState }
//         // setTodos([...todos, todo])
//         // setFormState(initialState)
//         const contact = {
//             gender: "male",
//             firstName: "Max",
//             lastName: "Mustermann",
//             zip: "22764",
//             city: "Hamburg",
//             phone: "0401234567890"
//         };
//         await API.graphql(graphqlOperation(createContact, {input: contact}))
//     } catch (err) {
//         console.log('error creating todo:', err)
//     }
// }

export const ScanScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [name, setName] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({type, data}) => {
        setScanned(true);
        setName(data);
        // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {name && <Text>
                Client {name} was added to the visitors database!
            </Text>}
            {!name && <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}

            {!name && scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)}/>}
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
