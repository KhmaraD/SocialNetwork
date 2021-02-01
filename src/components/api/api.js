import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "68a1c0d9-bbe4-41bb-9d74-2bf8cd452eb4"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
        });
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getUserProfile(userId) {
        if (!userId) {
            userId = 14408;
        }
        return instance.get(`profile/` + userId)
            .then(response => {
                return response.data;
            });
    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    }
}
