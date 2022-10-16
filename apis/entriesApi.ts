import axios from "axios";

const EntriesApi = axios.create({
  baseURL: "/api",
});

export default EntriesApi;
