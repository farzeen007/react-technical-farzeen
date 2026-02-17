import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-md">
        <div className="text-sm uppercase tracking-[0.3em] text-green-600 mb-4">
          Navigation Error
        </div>

        <h1 className="text-4xl font-semibold text-gray-800 mb-3">
          This page drifted away.
        </h1>

        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          The route you’re trying to access doesn’t exist or has been moved.
        </p>

        <Link
          to="/dashboard"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-xl text-sm font-medium hover:bg-green-700 transition"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Error;
