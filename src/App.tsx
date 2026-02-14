import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { UserProvider } from "./context/UserContext";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";

export default function App() {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/user/:id"
            element={
              <Layout>
                <UserDetails />
              </Layout>
            }
          />
        </Routes>
      </UserProvider>
    </Router>
  );
}
