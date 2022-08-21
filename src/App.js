import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import AddNewTicket from "./pages/AddNewTicket";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import TicketDetails from "./pages/TicketDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="new-ticket" element={<AddNewTicket />} />
          <Route path="ticket-details/:id" element={<TicketDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
