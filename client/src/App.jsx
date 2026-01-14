import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Home from "./pages/Home";
import AddFolder from "./pages/AddFolder";
import Trash from "./pages/Trash";
import Starred from "./pages/Starred";
import Loading from "./pages/Loading";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes (Redirect to Home if logged in) */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route element={<PublicRoute />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Route>

          {/* Protected Routes */}
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/add-folder" element={<AddFolder />} />
            <Route path="/trash" element={<Trash />} />
            <Route path="/starred" element={<Starred />} />
          </Route>

          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
