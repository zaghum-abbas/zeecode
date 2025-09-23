import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-black border-r border-gray-800 z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <Logo size="lg" />
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-10 w-10 text-white hover:bg-gray-800 rounded-full"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Sidebar Content */}
          <div className="flex-1 p-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block p-2 rounded-xl text-base font-normal transition-all duration-200 hover:bg-gray-800 hover:text-white ${
                    isActive(item.path)
                      ? "bg-gray-800 text-white shadow-lg"
                      : "text-gray-300"
                  }`}
                  onClick={onClose}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Theme Toggle */}
          <div className="px-6 py-4 border-t border-gray-800">
            <div className="flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>

          {/* Get Started Button at Bottom */}
          <div className="p-6 border-t border-gray-800">
            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent border-gray-600 text-white hover:bg-gray-800 hover:text-white hover:border-gray-500 text-lg font-semibold py-6 rounded-xl"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
