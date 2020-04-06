import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from "react-native";
export default class Diets extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Tab Diets</Text>
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