// Index.ios.js - place code in here for ios
// http://rallycoding.herokuapp.com/api/music_albums
// title, artist, url, image, thumnail_image

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
         <Header headerText={'Albums'} />
         <AlbumList />
    </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
