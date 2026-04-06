import { isRouteErrorResponse, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: 32, textAlign: "center" }}>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <p>
          {error.data?.message ??
            "Oops! The page you are looking for cannot be found."}
        </p>
      </div>
    );
  }

  return (
    <div style={{ padding: 32, textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <p>{error?.message ?? "An unexpected error occurred."}</p>
    </div>
  );
};

export default ErrorPage;
