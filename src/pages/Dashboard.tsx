import { Plus } from "lucide-react";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import UserForm from "../components/UseForm";
import UserList from "../components/UserList";
import { useUser } from "../context/UserContext";
import { useSearch } from "../hooks/useSearch";

export default function Dashboard() {
  const { allUsers, loading, error } = useUser();
  const { query, setQuery, filteredItems } = useSearch(allUsers, "name", 300);
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200 w-full sm:w-auto justify-center font-medium"
        >
          <Plus className="w-4 h-4" /> Create User
        </button>
      </div>

      <UserList users={filteredItems} loading={loading} error={error} />

      {isModalOpen && <UserForm onClose={() => setIsModalOpen(false)} />}
    </>
  );
}
