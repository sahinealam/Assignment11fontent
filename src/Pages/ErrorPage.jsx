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
              src="https://cdn.sanity.io/images/599r6htc/regionalized/dd4fc49d62e53911409d96f8b1cf11731279b813-2800x2800.png"
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
            src="data:image/png;base64,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"
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
