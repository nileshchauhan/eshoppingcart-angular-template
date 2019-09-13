export interface GenericResponse<T> {
  code: number;
  message: string;
  response: T;
}
