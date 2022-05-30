import axios from 'axios';

const Fetcher = axios.create({
    baseURL: "https://nameless-citadel-60846.herokuapp.com"
})

export default Fetcher;