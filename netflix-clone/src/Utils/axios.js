import axios from 'axios'

const instance = axios.create({
  basrURL: "https://api.themoviedb.org/3",
});

export default instance