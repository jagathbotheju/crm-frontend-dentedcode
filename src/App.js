import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
