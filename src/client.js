// import axios from "axios";

// const client = axios.create({ baseURL: process.env.REACT_APP_API })

// export default client;
import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:4000" });

export default client;
