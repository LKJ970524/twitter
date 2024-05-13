import HomePage from "pages/home";
import Notifications from "pages/notifications";
import PostDetail from "pages/posts/detail";
import PostEdit from "pages/posts/edit";
import Profile from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import Search from "pages/search";
import Login from "pages/users/login";
import SignUp from "pages/users/signup";
import { Navigate, Route, Routes } from "react-router-dom";

interface RouterProps {
  isAuthenticated: boolean;
}

export default function Router({ isAuthenticated }: RouterProps) {
  return (
    <Routes>
      {isAuthenticated ? (
        <> {/* 로그인 되었을 때 */}
          <Route path="/" element={<HomePage />} /> {/* 메인페이지 */}
          <Route path="/posts/:id" element={<PostDetail />} /> {/* 상세게시글 */}
          <Route path="/posts/edit/:id" element={<PostEdit />} /> {/* 게시글 수정 */}
          <Route path="/profile" element={<Profile />} /> {/* 프로필 */}
          <Route path="/profile/edit" element={<ProfileEdit />} /> {/* 프로필 수정 */}
          <Route path="/notifications" element={<Notifications />} /> {/* 알림 페이지 */}
          <Route path="/search" element={<Search />} /> {/* 검색페이지 */}
          <Route path="*" element={<Navigate replace to="/" />} /> {/* 잘못된 페이지 이동시 메인페이지로 이동 */}
        </>
      ) : (
        <> {/* 비로그인 상태일때 */}
          <Route path="/users/login" element={<Login />} /> {/* 로그인 페이지 */}
          <Route path="/users/signup" element={<SignUp />} /> {/* 회원가입 페이지 */}
          <Route path="*" element={<Navigate replace to="/users/login" />} /> {/* 잘못된 페이지 이동시 로그인 페이지로 이동 */}
        </>
      )}
    </Routes>
  );
}
