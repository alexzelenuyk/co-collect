import * as React from "react";
import {View, Image} from "react-native";
import {Text} from "react-native-elements";
import {styles} from "./styles";

export const GenerateScreen = () => {
    return (
        <View style={styles.container}>
            <Text h4={true} style={styles.text}>
                Scan the code below and follow the instruction to generate your personal QR code.
            </Text>
            <View>
                <Image
                    source={require('./static/generate-qr-code-svg.png')}
                    style={styles.qrcode}
                />
            </View>
        </View>
    );
};
