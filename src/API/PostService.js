import axios from "axios";

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    // в рамках сервиса отлавливать ошибку в данном случае на самом деле не
    // очень хорошо, лучше отрабатывать ошибку где-то вне, но пока так
    // try {
    //   const URL = "https://jsonplaceholder.typicode.com/posts";
    //   const response = await axios.get(URL);
    //   return response.data;
    // } catch (e) {
    //   console.log(e);
    // }
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const response = await axios.get(URL, {
      params: {
        _limit: limit,
        _page: page,
      },
    });
    return response;
  }

  static async getPostById(id) {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const response = await axios.get(URL);
    return response;
  }

  static async getPostCommentsById(id) {
    const URL = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
    const response = await axios.get(URL);
    return response;
  }
}
