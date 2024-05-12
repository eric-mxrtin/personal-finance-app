import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, UserButton, useSession } from "@clerk/clerk-react";

function App() {
  const { session } = useSession();

  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Link to="/"> Dashboard</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              session ? (
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              ) : (
                <Auth />
              )
            }
          />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
