import { Response } from "express";

export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
    totalPages?: number;
  };
}

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message: string = "Success",
  statusCode: number = 200,
  meta?: ApiResponse<T>["meta"]
): void => {
  res.status(statusCode).json({
    success: true,
    message,
    data,
    ...(meta && { meta }),
  } satisfies ApiResponse<T>);
};

export const sendError = (
  res: Response,
  message: string = "Error occurred",
  statusCode: number = 400,
  data?: unknown
): void => {
  res.status(statusCode).json({
    success: false,
    message,
    ...(data && { data }),
  } satisfies ApiResponse);
};

export const sendPaginated = <T>(
  res: Response,
  data: T[],
  total: number,
  page: number,
  limit: number,
  message: string = "Success"
): void => {
  res.status(200).json({
    success: true,
    message,
    data,
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  } satisfies ApiResponse<T[]>);
};
