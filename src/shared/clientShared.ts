import { HttpStatusCode } from "@/types/httpStatusCode";
// import { getBearerToken, logoutUser } from "./cookies";
import { GenericHandleResponse, method } from "@/types/api";

const handleCustomApiRequest = async <T = unknown>(
  request: string,
  method: method,
  body: unknown = undefined,
  withToken: boolean = false
) => {
  try {
    let headers: HeadersInit = [];

    if (withToken) {
      //   const { token } = await getBearerToken();
      // CAMBIAR
      const token = { value: "" };
      headers = [["Authorization", `${token?.value}`]];
    }

    const fetching = await fetch(request, {
      method,
      body: body ? JSON.stringify(body) : undefined,
      headers,
    });

    const petition = await fetching.json(),
      statusCode = fetching.status;

    return handleStatusCode<T>(statusCode, petition);
  } catch (error: unknown) {
    return { errors: error, message: "Unknown error", data: undefined };
  }
};

const handleStatusCode = async <T>(
  statusCode: HttpStatusCode,
  petition: GenericHandleResponse<T>
) => {
  switch (statusCode) {
    case HttpStatusCode.UNAUTHORIZED:
      //   await logoutUser();
      return { message: undefined, errors: [], data: undefined };
    case HttpStatusCode.OK:
      return { message: undefined, errors: [], data: petition.data as T };

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
