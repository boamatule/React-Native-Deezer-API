import axios from 'axios';
import _ from 'lodash';
import { AsyncStorage } from 'react-native'

const API_KEY = 'bdb11fddf6msh306d9980f566ee8p138cc2jsnacd2bd7d40fa';

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout: 2000,
  headers: {'x-rapidapi-key': API_KEY}
});

export const searchTracks = singerName => {
  return axiosInstance.get(`search?q=${singerName}`).then(
    response => {
      const albums = response.data.data.map(item => item.album);
      const uniqueAlbums = _.uniqBy(albums, 'title');

      return uniqueAlbums;
    })
}

export const getAlbumTracks = albumId => {
  return axiosInstance.get(`album/${albumId}`).then(
  response => response.data.tracks.data);
}

export const storeData = async (key, value) => {
  const stringfyValue = JSON.stringify(value);

  try {
    await AsyncStorage.setItem(key, stringfyValue);
    return value;
  } catch (error) {
    // Error saving data
  }
};

export const retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      debugger;
      const parsedValue = JSON.parse(value);
      return JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving data
  }
};

export const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
    return true;
  } catch (error) {
    // Error saving data
  }
}