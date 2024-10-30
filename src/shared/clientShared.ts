import { HttpStatusCode } from "@/types/httpStatusCode";
// import { getBearerToken, logoutUser } from "./cookies";
import { GenericHandleResponse, method } from "@/types/api";

const handleCustomApiRequest = async <T = unknown>(
  request: string,
  method: method,
  body: unknown = undefined,
  withToken: boolean = false,
  contentType: "application/json" | "multipart/form-data" = "application/json"
) => {
  try {
    let headers: HeadersInit = [];

    if (withToken) {
      //   const { token } = await getBearerToken();
      // CAMBIAR
      const token = { value: "" };
      headers = [["Authorization", `${token?.value}`]];
    }
    headers.push(["accept", "*/*"]);
    headers.push(["Content-Type", contentType]);

    const fetching = await fetch(request, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });

    const petition = await fetching.json(),
      statusCode = fetching.status;

    return handleStatusCode<T>(statusCode, petition);
  } catch (error: unknown) {
    return {
      errors: error as string[],
      message: "Unknown error",
      data: undefined,
    } as GenericHandleResponse<T>;
  }
};

const handleStatusCode = async <T>(
  statusCode: HttpStatusCode,
  petition: GenericHandleResponse<T>
): Promise<GenericHandleResponse<T>> => {
  switch (statusCode) {
    case HttpStatusCode.UNAUTHORIZED:
      //   await logoutUser();
      return { message: "", errors: [], data: undefined };
    case HttpStatusCode.OK:
      return { message: "", errors: [], data: petition.data as T };

    default:
      return {
        message: petition.message,
        errors: petition.errors,
        data: undefined,
      };
  }
};

const randomKey = () =>
  new Date(new Date().valueOf() - Math.random() * 1e12).toString();

export { randomKey, handleCustomApiRequest };
