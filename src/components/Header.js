import { AppBar, Typography, Toolbar } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4">MERN Ticket APP</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
