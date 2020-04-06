import React from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Dimensions
} from "react-native";
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import All from "./assets/Pages/All";
import Menu from "./assets/Pages/Menu";
import Diets from "./assets/Pages/Diets";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <ImageBackground
                        source={require("./assets/Pages/header.png")}
                        style={styles.imageBackground}
                        resizeMode="contain"
                    >
                        <Text style={styles.title}>Acasă</Text>
                    </ImageBackground>
                </View>
                <View style={styles.tabbar}>
                    <ScrollableTabView
                        initialPage={0}
                        tabBarActiveTextColor="mediumpurple"
                        renderTabBar={() => <DefaultTabBar
                            underlineStyle={{
                                backgroundColor: 'mediumpurple'
                            }} />}
                    >
                        <All tabLabel="Toate" props={this.props} />
                        <Menu tabLabel="Meniu" props={this.props} />
                        <Diets tabLabel="Diete" props={this.props} />

                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 20,
        position: 'absolute'
    },
    tabbar: {
        flex: 1,
        marginTop: width * 0.3,
        paddingHorizontal: 30
    },
    imageBackground: {
        width: width * 0.4,
        height: width * 0.4,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        marginTop: 25,
        fontWeight: 'bold',
        fontSize: 25
    }
});