import axios from 'axios';
import type { LoginForm, RegisterForm, ResetPasswordForm, ApiResponse, User } from './types';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  timeout: 5000,
});

export const login = async (data: LoginForm): Promise<ApiResponse<User>> => {
  const response = await api.post<ApiResponse<User>>('/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterForm): Promise<ApiResponse<User>> => {
  const response = await api.post<ApiResponse<User>>('/auth/register', data);
  return response.data;
};

export const resetPassword = async (data: ResetPasswordForm): Promise<ApiResponse<void>> => {
  const response = await api.post<ApiResponse<void>>('/auth/reset-password', data);
  return response.data;
};

export const sendResetPasswordEmail = async (email: string): Promise<ApiResponse<void>> => {
  const response = await api.post<ApiResponse<void>>('/auth/send-reset-email', { email });
  return response.data;
}; 