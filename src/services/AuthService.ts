import axios, { AxiosRequestConfig } from 'axios';
export class AuthService {
    urlApi = import.meta.env.VITE_BACKEND_URL ?? 'http://192.168.1.20:3000';

    async login(username: string, password: string) {
        const config: AxiosRequestConfig = {
            method: 'POST',
            url: `${this.urlApi}/auth/login`,
            data: {
                username,
                password,
            },
        };
        const response = await axios(config);
        try {
            return response.data;
        } catch (error: any) {
            return error.response.data;
        }
    }
}
