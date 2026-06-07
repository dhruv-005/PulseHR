import { Role } from "./employee.types";

export interface AuthUser {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
  department?: string;
  avatar?: string;
}

export interface LoginInput {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: AuthUser;
  token: string;
  refreshToken: string;
}

export interface JWTPayload {
  userId: string;
  email: string;
  role: Role;
  iat: number;
  exp: number;
}
