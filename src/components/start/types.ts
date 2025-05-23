export interface User {
  id?: string;
  username: string;
  email: string;
  password?: string;
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm extends LoginForm {
  username: string;
  confirmPassword: string;
}

export interface ResetPasswordForm {
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ApiResponse<T> {
  code: number;
  message: string;
  data?: T;
} 