import HomePage from "pages/home";
import Notifications from "pages/notifications";
import PostList from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostEdit from "pages/posts/edit";
import PostNew from "pages/posts/new";
import Profile from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import Search from "pages/search";
import Login from "pages/users/login";
import SignUp from "pages/users/signup";
import { Navigate, Route, Routes } from "react-router-dom";

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/posts' element={<PostList />} />
      <Route path='/posts/:id' element={<PostDetail />} />
      <Route path='/posts/new' element={<PostNew />} />
      <Route path='/posts/edit/:id' element={<PostEdit />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/profile/edit' element={<ProfileEdit />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/search' element={<Search />} />
      <Route path='/users/login' element={<Login />} />
      <Route path='/users/signup' element={<SignUp />} />
      <Route path='*' element={<Navigate replace to='/' />} />
    </Routes>
  )
}