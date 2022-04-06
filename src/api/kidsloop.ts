import axios from "axios";

export default axios.create({
  baseURL: " https://my-json-server.typicode.com/kidsloop-test/accounts",
  headers: {
    "Content-Type": "application/json",
  },
});
