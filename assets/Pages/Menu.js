import React from 'react';
import {
    View,
    Text,
    StyleSheet,

} from "react-native";
export default class Menu extends React.Component{

    render(){
        return(
            <View style={styles.container}>
            <Text>Tab Menu</Text>
            </View>
        )
    }
}

var styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
});