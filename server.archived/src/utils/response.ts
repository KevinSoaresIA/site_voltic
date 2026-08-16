// Padronização das respostas JSON da API, para que o frontend
// sempre saiba o que esperar, seja sucesso ou erro.

export interface SuccessResponse<T = unknown> {
  success: true;
  message: string;
  data?: T;
}

export interface ErrorResponse {
  success: false;
  message: string;
  errors?: unknown;
}

export function successResponse<T = unknown>(
  message: string,
  data?: T
): SuccessResponse<T> {
  return {
    success: true,
    message,
    ...(data !== undefined ? { data } : {}),
  };
}

export function errorResponse(message: string, errors?: unknown): ErrorResponse {
  return {
    success: false,
    message,
    ...(errors !== undefined ? { errors } : {}),
  };
}
