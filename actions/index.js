import axios from 'axios'
import _ from 'lodash'

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