import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.icndb.com/jokes",
});

export default Api;
