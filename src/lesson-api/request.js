// AXIOS LESSON

// import axios, { isAxiosError } from "axios";
// import { findRenderedComponentWithType } from "react-dom/test-utils";

// export const getPostsController = new AbortController();

// const FIRST_API_URL = "https://jsonplaceholder.typicode.com/";
// const SECOND_API_URL = "https://fakerapi.it/api/v1";

// const firstApiAxios = axios.create({
//     baseURL: FIRST_API_URL,
//     headers: {
//         Authorization: `Bearer asdfasdfasdf`
//     },
//     withCredentials: true,
// });

// const secondApiAxios = axios.create({
//     baseURL: FIRST_API_URL,
//     headers: {
//         Authorization: `Beasdfasdr asdfasdfasdf`
//     },
//     withCredentials: true,
// });

// axios.defaults.baseURL = FIRST_API_URL;
// axios.defaults.headers.common = {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
// };
// axios.defaults.withCredentials = true;

// axios.get("/api/posts", {
//     proxy: {
//         protocol: "https",
//         host: "localhost",
//         port: 8080,
//         auth: {
//             username: "asdf",
//             password: "asdf"
//         }
//     }
// })

// export const getPosts = axios({ 
//     url: `${FIRST_API_URL}/posts/101`,
//     method: "GET",
//     params: {
//         offset: 0,
//         limit: 10
//     }
// })

// export const getPosts = async () => {
//     try {
//         const res = await axios({ 
//             url: `${FIRST_API_URL}/posts`,
//             method: "GET",
//             params: {
//                 offset: 0,
//                 limit: 10
//             },
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("token")}`
//             },
//             // timeout: 1,
//             withCredentials: true,
//             onDownloadProgress: function (progressEvent) {
//                 console.log(progressEvent, "first")
//             },
//             // onUploadProgress: ... // см. выше
//         });
//         console.log(res.data);
//     } 
//     catch (error) {
//         if (isAxiosError(error)) {
//             console.log(error, "err");
//             console.log(error.response?.data.errText, "error");
//         } 
//         else if (error instanceof Error) {
//             console.log(error.message)
//         }
//     }
// }

// export const getPosts = async () => {
//     try {
//         const res = await firstApiAxios.get("/posts/1", {
//             params: {
//                 offset: 0,
//                 limit: 10
//             },
//             signal: getPostsController.signal
//         });
//         console.log(res.data);
//     } 
//     catch (error) {
//         if (isAxiosError(error)) {
//             console.log(error, "err");
//             console.log(error.response?.data.errText, "error");
//         } 
//         else if (error instanceof Error) {
//             console.log(error.message)
//         }
//     }
// }

// export const createPost = async () => {
//     const res = await axios({
//         url: `${FIRST_API_URL}/posts/1`,
//         method: "POST",
//         headers: {
//             Authorization: `Bearer ${FIRST_API_URL}`
//         }
//     })
// }

// export const createPost = async () => {
//     const res = await axios.post(
//         `/posts`, 
//         {
//             body: "asdf",
//             title: "zxcv"
//         },
//         {
//             headers: {
//                 Authorization: `Bearer ${FIRST_API_URL}`
//             },
//             params: {
//                 offset: 0,
//                 limit: 10
//             }
//         }
//     )
// }

// export const createPost = async () => {
//     const res = await firstApiAxios.get("/posts/1");
// }

// export const getImages = async () => {
//     const res = await secondApiAxios.get("/images");
// }

// перед 
// firstApiAxios.interceptors.response.use(
//     (res) => { console.log(res.status, "int res"); return res },
//     (err) => { console.log(err); },
// );

// const token = "asdfasdf";
// firstApiAxios.interceptors.response.use(
//     (res) => { console.log(res.status, "int res"); return res },
//     (error) => { 
//         if (isAxiosError(error)) {
//             if (error.status == 401 && token) {
//                 const {data} = axios.post("url/auth", { refreshToken: token });
//                 localStorage.set(data, 'token');
//             }
//         }
//     },
// );

// // между отосланием на бек и получением беком
// firstApiAxios.interceptors.request.use(
//     (config) => { return config; },
//     (error) => {}
// );
