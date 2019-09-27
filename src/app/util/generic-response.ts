export interface GenericResponse<T> {
  code: number;
  message: string;
  list: T;
  obj: T;
}
