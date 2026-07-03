import api from "../api/axios";

export const getDashboard = async () => {
    const response = await api.get("/dashboard");
    return response.data;
};

export const getCategoryProgress = async () => {
    const response = await api.get("/dashboard/categories");
    return response.data;
};

export const getNotifications = async () => {
    const response = await api.get("/notifications");
    return response.data;
};