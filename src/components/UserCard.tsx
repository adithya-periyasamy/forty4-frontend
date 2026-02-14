import { Link } from "react-router-dom";
import type { User } from "../types/UserTypes";

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-xl p-6 border border-gray-200 flex flex-col h-full group">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold">
          {user.name.charAt(0)}
        </div>
        {user.company && (
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600">
            {user.company.name}
          </span>
        )}
      </div>

      <h3
        className="text-lg font-bold text-gray-900 mb-1 truncate"
        title={user.name}
      >
        {user.name}
      </h3>
      <p className="text-sm text-gray-500 mb-4">
        @{user.username || "unknown"}
      </p>

      <div className="text-sm text-gray-600 space-y-2 flex-grow">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Email:</span>
          <span className="text-gray-900 truncate">{user.email}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Phone:</span>
          <span className="text-gray-900 truncate">{user.phone}</span>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-gray-100">
        <Link
          to={`/user/${user.id}`}
          className="text-blue-600 hover:text-blue-700 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
};

export default UserCard;
