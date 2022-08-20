import {
  AppBar,
  Typography,
  Toolbar,
  Container,
  Box,
  SwipeableDrawer,
  useTheme,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const theme = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const drawer = (
    <>
      <SwipeableDrawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        onClick={() => setOpenDrawer(false)}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: "40%" },
        }}
        PaperProps={{
          sx: {
            backgroundColor: "primary.main",
            color: "white",
            ...theme.typography.navTab,
          },
        }}
      >
        <Box sx={{ ...theme.mixins.toolbar }} />
        <List disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider color="gray" />
          <ListItemButton component={Link} to="/">
            <ListItemText>Dashboard</ListItemText>
          </ListItemButton>
          <Divider color="gray" />
          <ListItemButton component={Link} to="/">
            <ListItemText>Ticket</ListItemText>
          </ListItemButton>
          <Divider color="gray" />
          <ListItemButton component={Link} to="/">
            <ListItemText>Logout</ListItemText>
          </ListItemButton>
        </List>
      </SwipeableDrawer>
    </>
  );

  return (
    <AppBar position="static" sx={{ zIndex: theme.zIndex.modal + 1 }}>
      <Toolbar>
        {openDrawer && drawer}
        <IconButton
          color="inherit"
          display={{ xs: "flex", sm: "none" }}
          onClick={() => setOpenDrawer(!openDrawer)}
        >
          <FaBars />
        </IconButton>
        <Typography
          flexGrow={1}
          fontSize={{ xs: "1.2rem", sm: "2.4rem" }}
          //display={{ xs: "none", sm: "block" }}
        >
          MERN Ticket APP
        </Typography>

        {/* menus */}
        <Box gap={3} display={{ xs: "none", sm: "flex" }}>
          <Typography
            color="inherit"
            component={Link}
            to="/dashboard"
            sx={{ textDecoration: "none" }}
          >
            Dashboard
          </Typography>
          <Typography>Ticket</Typography>
          <Typography>Logout</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
