import { useNavigate } from "react-router-dom";
import { userStore } from "../store";

const Header = ({ setIsOpen }) => {
  const { user, logout } = userStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    logout();
  };
  const userName = user?.email?.split("@")[0] || "";

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-4 lg:px-6">
      <button
        className="lg:hidden text-green-600 text-2xl"
        onClick={() => setIsOpen(true)}
      >
        ☰
      </button>
      <div className="flex items-center gap-6 ml-auto">
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">{userName}</p>
          <p className="text-xs text-gray-700">{user?.email}</p>
        </div>
        <button
          onClick={handleLogout}
          className="bg-green-600 cursor-pointer text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-green-500 active:scale-95 transition-all duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
