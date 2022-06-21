import Navbar from "./components/Navbar";
import Homepage from "./Homepage";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import SkillAdmin from "./pages/admiPages/SkillAdmin";
import AddNewWork from "./pages/admiPages/AddNewWork";
import AddNewSkillLogo from "./pages/admiPages/AddNewSkillLogo";
import Login from "./pages/admiPages/Login";
import Register from "./pages/admiPages/Register";
import AuthContext from "./context/AuthContext/AuthContext";
import { useContext } from "react";
import ErrorPage from "./pages/404";
import LoadingScreen from "./pages/LoadingScreen";
import styled from "styled-components";

function App() {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, loading } = authContext;

  return (
    <Container className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {isAuthenticated ? (
            <>
              <Route path="/add-new-skill" element={<SkillAdmin />} />
              <Route path="/add-new-work" element={<AddNewWork />} />
              <Route
                path="/add-new-language-or-tool"
                element={<AddNewSkillLogo />}
              />
              <Route path="/login" element={<Navigate to="/hell" replace />} />
              <Route
                path="/register"
                element={<Navigate to="/hell" replace />}
              />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
          <Route path="/spinner" element={<LoadingScreen />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* background-color: rgb(88, 213, 211); */
  color: white;

  width: 100%;
`;
