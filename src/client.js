// import axios from "axios";

// const client = axios.create({ baseURL: process.env.REACT_APP_API })

// export default client;
import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:8080" });

export default client;
