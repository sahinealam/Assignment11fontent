import { isRouteErrorResponse, useRouteError } from "react-router";
import { Link } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
        <div className="text-center max-w-2xl">
          {/* Error Image */}
          <div className="mb-8">
            <img
              src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png"
              alt="Error"
              className="mx-auto w-full h-auto max-w-lg rounded-lg shadow-lg"
            />
          </div>

          {/* Error Status */}
          <h1 className="text-6xl font-bold text-gray-900 mb-2">
            {error.status}
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            {error.statusText}
          </h2>

          {/* Error Message */}
          <p className="text-gray-600 text-lg mb-8">
            {error.data?.message ??
              "Oops! The page you are looking for cannot be found."}
          </p>

          {/* Back Button */}
          <Link
            to="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <div className="text-center max-w-2xl">
        {/* Error Image */}
        <div className="mb-8">
          <img
            src="https://atlassianblog.wpengine.com/wp-content/uploads/2017/12/44-incredible-404-error-pages@3x-1560x760.png"
            alt="Error"
            className="mx-auto w-full h-auto max-w-lg rounded-lg shadow-lg"
          />
        </div>

        {/* Error Title */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Something went wrong
        </h1>

        {/* Error Message */}
        <p className="text-gray-600 text-lg mb-8">
          {error?.message ?? "An unexpected error occurred."}
        </p>

        {/* Back Button */}
        <Link
          to="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
