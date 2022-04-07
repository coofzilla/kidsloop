import axios from "axios";

const loopInstance = axios.create({
  baseURL: " https://my-json-server.typicode.com/kidsloop-test/accounts",
});

export default loopInstance;
