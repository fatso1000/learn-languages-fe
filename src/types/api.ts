export interface GenericHandleResponse<T> {
  data: T | undefined;
  errors: string[];
  message: string;
}
export type method = "POST" | "GET" | "PATCH" | "DELETE";

export interface IChoice {
  text: string;
  tts?: string;
}