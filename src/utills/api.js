
import axios from "axios"
import { API_KEY } from './config'

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${API_KEY}`
  }
});

// search books api
export const booksSearch = params => {
  return Kakao.get("/v3/search/book", { params });
};