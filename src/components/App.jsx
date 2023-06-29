import { Routes, Route } from "react-router-dom";
import SharedLayout from "../pages/Layout";
import Home from "../pages/HomePage";
import ContactsPage from "../pages/ContactsPage";
import Login from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<NotFound />} />
      </Route >
    </Routes>
  )
};

export default App;
