import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout/>} path='/'/>
    </Routes>
  );
}

export default App;
