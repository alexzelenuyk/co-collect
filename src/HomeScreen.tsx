import * as React from "react";
import {useEffect, useState} from "react";
import {View} from "react-native";
import {Button, Text} from "react-native-elements";
import {styles} from "./styles";
import {Auth} from "aws-amplify";

export const AdminGroup = "Admin";

export const HomeScreen = ({ navigation }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        (async () => {
            const userData =  await Auth.currentAuthenticatedUser();
            const groups = userData.signInUserSession.accessToken.payload["cognito:groups"];
            setIsAdmin(groups.includes(AdminGroup));
        })();
    }, []);

    const switchView = (view) => navigation.navigate(view);

    return (
        <View style={styles.homeContainer}>
            <Text h4={true} style={styles.text}>
                Co-collect - is an APP to collect a visitor information while visiting restaurants or any other places.
            </Text>

            <Button
                title="Scan"
                onPress={() => switchView('Scan')}
                style={styles.button}
            />

            <Button
                title="Generate QR Code"
                onPress={() => switchView('Generate')}
                style={styles.button}
            />

            {isAdmin && <Button
                    title="See all visitors"
                    onPress={() => switchView('Visitors')}
                    style={styles.button}
                />
            }

            <Button
                title="Logout"
                onPress={() => Auth.signOut()}
                style={styles.button}
            />
        </View>
    );
};
