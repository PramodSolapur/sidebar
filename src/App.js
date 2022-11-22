import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/Login";
import RegisterPage from "./pages/RegisterPage";
import ErrorPage from "./pages/ErrorPage";
import Pagination from "./pages/Pagination";

function App() {
  return (
    <>
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
