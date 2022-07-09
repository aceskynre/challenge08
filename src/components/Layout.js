import { Box } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box minHeight="100vh" maxWidth="xl" mx="auto" display="flex" flexDirection="column">
      <Header />
      <Box display="flex" flexDirection="column" flexGrow={1}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
