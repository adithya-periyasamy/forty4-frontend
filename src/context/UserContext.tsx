import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";
import type { User } from "../types/UserTypes";

interface UserContextType {
  allUsers: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: Omit<User, "id">) => void;
  getUserById: (id: number) => User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a <UserProvider>");
  }
  return context;
};

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) throw new Error("Failed to fetch users");
        const data: User[] = await response.json();
        setAllUsers(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "An unknown error occurred",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const addUser = useCallback((newUser: Omit<User, "id">) => {
    const userWithId: User = { ...newUser, id: Date.now() };
    setAllUsers((prev) => [userWithId, ...prev]);
  }, []);

  const getUserById = useCallback(
    (id: number) => allUsers.find((user) => user.id === id),
    [allUsers],
  );

  return (
    <UserContext.Provider
      value={{ allUsers, loading, error, addUser, getUserById }}
    >
      {children}
    </UserContext.Provider>
  );
};
