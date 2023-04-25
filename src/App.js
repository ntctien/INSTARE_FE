import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Test from "./pages/Test";
import Profile from "./pages/Profile";
import Post from "./pages/Post";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<HomeLayout />} path='/' >
        <Route element={<Home />} path='' />
        <Route element={<Profile />} path="username" />
      </Route>
      <Route element={<Post />} path="post" />
      <Route element={<Test />} path="test" />
    </Routes>
  );
}

export default App;
