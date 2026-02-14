import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/dashboard.svg" alt="logo" className="h-7 w-7" />
            <span className="text-2xl font-semibold">User Dashboard</span>
          </Link>
        </div>
      </nav>
    </>
  );
};
