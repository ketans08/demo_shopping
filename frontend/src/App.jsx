import { Box, useColorModeValue } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";
import CreatePage from "../pages/CreatePage";



function App() {
  return (
    <Box minH={"100vh"}>
      <Navbar bg={useColorModeValue("gray.500","gray.900")}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
