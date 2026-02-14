import UserList from "../components/UserList";
import { useUser } from "../context/UserContext";

export default function Dashboard() {
  const { allUsers, loading, error } = useUser();
  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div>search</div>
        <button>Create User</button>
      </div>

      <UserList users={allUsers} loading={loading} error={error} />
    </>
  );
}
