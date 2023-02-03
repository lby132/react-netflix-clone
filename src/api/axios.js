import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "04541dfb80f4ba1fe4375e67049e7df8",
        language: "ko-KR",
    },
});

export default instance;