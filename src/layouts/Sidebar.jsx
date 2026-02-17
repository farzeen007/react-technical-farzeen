import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`
          fixed lg:static top-0 left-0 h-full w-64 bg-white shadow-lg
          transform ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 transition-transform duration-300 z-50
        `}
      >
        <div className="p-6 text-2xl font-bold text-green-600">Dashboard</div>

        <nav className="mt-6 flex flex-col gap-4 px-6">
          <Link
            to="/dashboard"
            className="text-green-600 hover:text-green-700 font-medium"
          >
            Home
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
