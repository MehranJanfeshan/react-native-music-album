import React from "react";
import {AppRegistry, View} from "react-native";
import Header from "./src/components/heard";
import AlbumList from "./src/components/AlbumList";


const App = () => {
    return (
        <View style={{flex: 1}}>
            <Header headerText={'Albums'}/>
            <AlbumList/>
        </View>

    )
};

AppRegistry.registerComponent('hello', () => App);