// src/utils/api.ts
import axios from "axios";

// 設定 API 的基礎 URL，根據你的後端服務地址調整
const API_BASE_URL = "http://localhost:2083/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// 定義你需要的 API 方法
export const getReservations = async () => {
  try {
    const response = await apiClient.get("/Reservations/test");
    return response.data;
  } catch (error) {
    console.error("取得預約資料失敗", error);
    throw error;
  }
};

// 如果還有其他 API 方法，可以在這裡繼續添加
