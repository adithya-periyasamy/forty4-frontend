import React from "react";
import type { User } from "../types/UserTypes";
import SkeletonCard from "./SkeletonCard";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
  loading: boolean;
  error: string | null;
}

const UserList: React.FC<UserListProps> = ({ users, loading, error }) => {
  if (error) {
    return <div className="text-red-500 text-center py-4">Error: {error}</div>;
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No users found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
