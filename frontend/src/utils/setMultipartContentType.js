import axios from "axios";

const setMultipartContentType = token => {
    // Apply to every request
    axios.defaults.headers.common["Content-Type"] = "multipart/form-data";

};

export default setMultipartContentType;
