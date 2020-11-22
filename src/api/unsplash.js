import Axios from 'axios'

export default Axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ZWgp5514MUlCIrcQ7sRygd2Om1u3ZuFpzF5YQhVsG44",
  },
});
