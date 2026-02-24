import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

export const addDoctor = (data) => axios.post(`${API_URL}/doctor`, data);
export const getDoctors = () => axios.get(`${API_URL}/doctors`);

export const addStaff = (data) => axios.post(`${API_URL}/staff`, data);
export const getStaff = () => axios.get(`${API_URL}/staff`);