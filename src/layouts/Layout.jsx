import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white flex">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 flex flex-col">
        <Header setIsOpen={setIsOpen} />
        <main className="p-6 bg-gray-50 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
