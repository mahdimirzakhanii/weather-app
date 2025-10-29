import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { useUser } from "./context/UserContext";
import MainDashboard from "./pages/dashboard/MainDashboard";
import MainHome from "./pages/home/MainHome";
import MainLogin from "./pages/login/MainLogin";

function App() {
  const { name } = useUser();

  const ProtectRoute = () => {
    return name ? <Outlet /> : <Navigate to="/login" replace />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainHome />} />
        <Route path="/login" element={<MainLogin />} />
        <Route element={<ProtectRoute />}>
          <Route path="/dashboard" element={<MainDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
