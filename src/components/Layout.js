import { Stack } from "@mui/material";
import Header from "./Header";
import { ToastContainer, Bounce } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
      <Stack>
        <Header />
        <Outlet />
      </Stack>
    </>
  );
};

export default Layout;
