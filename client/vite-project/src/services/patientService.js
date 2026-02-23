import axios from "axios";
import { getToken } from "./authService";

const API_URL = "http://localhost:5000/api/patient";

const headers = {
  Authorization: `Bearer ${getToken()}`,
};

export const addPatient = async (data) => {
  const res = await axios.post(`${API_URL}/add`, data, { headers });
  return res.data;
};

export const getAllPatients = async () => {
  const res = await axios.get(API_URL, { headers });
  return res.data;
};

export const getPatient = async (id) => {
  const res = await axios.get(`${API_URL}/${id}`, { headers });
  return res.data;
};

export const updatePatient = async (id, data) => {
  const res = await axios.put(`${API_URL}/${id}`, data, { headers });
  return res.data;
};

export const deletePatient = async (id) => {
  const res = await axios.delete(`${API_URL}/${id}`, { headers });
  return res.data;
};