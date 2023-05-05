import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import MenuLayout from "./layouts/MenuLayout";
import PasswordLayout from "./layouts/PasswordLayout";
import {
  Home,
  Message,
  NewPassword,
  OTPVerification,
  Post,
  Profile,
  ResetPassword,
  SignIn,
  SignUp,
  Test,
} from './pages';
import StoryLayout from "./layouts/StoryLayout";
import Stories from "./pages/Stories";
import CreateStoryLayout from "./layouts/CreateStoryLayout";
import CreateStory from "./pages/CreateStory";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route element={<PasswordLayout />}>
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="otp" element={<OTPVerification />} />
          <Route path="new-password" element={<NewPassword />} />
        </Route>
      </Route>
      <Route element={<MenuLayout />}>
        <Route element={<HomeLayout />} path='/' >
          <Route element={<Home />} path='' />
          <Route element={<Profile />} path="username" />
        </Route>
        <Route element={<Message />} path="message" />
      </Route>
      <Route element={<StoryLayout />}>
        <Route element={<Stories />} path="stories" />
        <Route element={<CreateStoryLayout/>}>
          <Route element={<CreateStory/>} path="create-story"/>
        </Route>
      </Route>
      <Route element={<Post />} path="post" />
      <Route element={<Test />} path="test" />
    </Routes>
  );
}

export default App;
