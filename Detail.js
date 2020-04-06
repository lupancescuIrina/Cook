import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions
} from "react-native";
export default class Detail extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab Detail</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});