import axios from "axios";

const appApi = axios.create({ baseURL: 'http://localhost:2041/' });
const srsApi = axios.create({ baseURL: 'http://localhost:3001/' })

export { srsApi }
export default appApi;