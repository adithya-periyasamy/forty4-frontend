import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import { useUser } from "../context/UserContext";
import { useSearch } from "../hooks/useSearch";

export default function Dashboard() {
  const { allUsers, loading, error } = useUser();
  const { query, setQuery, filteredItems } = useSearch(allUsers, "name", 300);
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <SearchBar value={query} onChange={setQuery} />
        </div>
        <button>Create User</button>
      </div>

      <UserList users={filteredItems} loading={loading} error={error} />
    </>
  );
}
