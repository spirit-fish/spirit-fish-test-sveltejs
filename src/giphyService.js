import axios from 'axios';

const trendingUrl = "https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1"
const getTrendingImageUrl = function() {
  return axios.get(trendingUrl)
    .then(response => {
      // return original image url
      return response.data.data[0].images.original.url
    });
}

const randomUrl = "https://api.giphy.com/v1/gifs/random?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1"
const getRandomImageUrl = function() {
  return axios.get(randomUrl)
    .then(response => {
      // return original image url
      return response.data.data.images.original.url
    });
}

export default {
  getTrendingImageUrl,
  getRandomImageUrl
}
