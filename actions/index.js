import axios from 'axios'

const API_KEY = 'bdb11fddf6msh306d9980f566ee8p138cc2jsnacd2bd7d40fa';

const axiosInstance = axios.create({
  baseURL: 'https://deezerdevs-deezer.p.rapidapi.com/',
  timeout: 2000,
  headers: {'x-rapidapi-key': 'API_KEY'}
});

export const  searchTracks = singerName => {

  return axiosInstance.get(`search?q=${singerName}`).then(
    (data) => {
      debugger;
      return data;
    }
  )
}