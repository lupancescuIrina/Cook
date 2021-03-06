import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions,
    Image,
    StatusBar,
    ScrollView
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";


export default class Detail extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <ImageBackground
                    source={require("./assets/Pages/header_detail.png")}
                    style={{ flex: 1, alignItems: 'center' }}
                    resizeMode={"stretch"}
                >
                    <View style={styles.image_container}>
                        <Image
                            source={this.props.navigation.state.params.image}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.back}>
                        <Ionicons
                            name="ios-arrow-round-back"
                            color="white"
                            size={35}
                            onPress={() => this.props.navigation.goBack()}
                        />
                    </View>
                </ImageBackground>
                <ScrollView style={styles.footer}>
                    <View style={styles.status}>
                        <Text style={{ color: 'mediumpurple' }}>{this.props.navigation.state.params.time} min </Text>
                    </View>
                    
                    <Text style={styles.textPrice}>{this.props.navigation.state.params.price}</Text>
                    <Text numberOfLines={2} style={styles.textName}>{this.props.navigation.state.params.name}</Text>
                    <Text style={styles.ingredients}>Ingrediente</Text>
                    <Text style={styles.textDetail}>{this.props.navigation.state.params.ingredients}</Text>
                    <Text style={styles.preparation}>Mod de preparare</Text>
                    <Text style={styles.textDetail}>{this.props.navigation.state.params.description}</Text>
                   
                </ScrollView>
            </View>
        )
    }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.5 * 0.5;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    footer: {
        flex: 1,
        paddingHorizontal: 40
    },
    image_container: {
        width: height_image,
        height: height_image,
        marginTop: height_image / 3
    },
    image: {
        width: '100%',
        height: '100%',
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: height_image / 2
    },
    back: {
        position: 'absolute',
        left: 0,
        marginTop: 30,
        marginLeft: 15
    },
    status: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 50,
        paddingVertical: 3,
        borderColor: 'mediumpurple'
    },
    textName: {
        color: '#3e3c3e',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 5
    },
    textDetail: {
        color: 'gray',
        marginTop: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingVertical: 10,
        borderRadius: 100
    },
    textOrder: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    },
    ingredients:{
        color:'black',
        fontSize:20,
        marginTop: 20
    },
    preparation:{
        color: 'black',
        fontSize: 20,
        marginTop: 20
    }
});