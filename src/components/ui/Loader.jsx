const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <div className="flex space-x-2 mb-4">
        <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce delay-150"></div>
        <div className="w-3 h-3 bg-green-600 rounded-full animate-bounce delay-300"></div>
      </div>
      <p className="text-gray-600 font-medium tracking-wide">
        Loading tasks...
      </p>
    </div>
  );
};

export default Loader;
