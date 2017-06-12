import React, {Component} from "react";
import {ScrollView} from "react-native";
import axios from "axios";
import AlbumDetails from "./AlbumDetails";

class AlbumList extends Component {
    state = {albums: []};

    componentWillMount() {
        console.log('I am here')
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(
                response => {
                    console.log(response)
                    this.setState({albums: response.data})
                }
            )
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetails key={album.title} album={album}/>
        );
    }

    render() {
        console.log('this is ', this.state)
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }

}

export default AlbumList;
