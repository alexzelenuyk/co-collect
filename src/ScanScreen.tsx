import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from "react-native-elements";
import {BarCodeScanner} from 'expo-barcode-scanner';
import {API, graphqlOperation} from 'aws-amplify'
import {createContact} from "./graphql/mutations";
import {styles} from "./styles";

export const ScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = async ({data}) => {
        setScanned(true);
        await API.graphql(graphqlOperation(createContact, {input: JSON.parse(data)}))
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            {!scanned && <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />}

            {scanned && <View>
                <Text h4={true} style={styles.text}>
                    Contact was added to the visitors database!
                </Text>
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} style={styles.button}/>
                <Button title="Done" onPress={() => navigation.navigate('Home')}  style={styles.button} />
            </View>}
        </View>
    );
};
