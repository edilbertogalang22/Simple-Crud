import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:5000/api",
})

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

let isLoggingOut = false;

// response interceptor: auto logout user if token is expired
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 && !isLoggingOut) {
            isLoggingOut = true;
            // token expired or invalid
            // console.log("Token expired or unautorized Loggin out...");
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            //first code 
            // window.location.href = "/login"; // refresh page
            //second code
            if(window.location.pathname !== "/login") {
                window.location.href = "/login";
            }
            
        }   
        return Promise.reject(error);
    }
)
export default api;