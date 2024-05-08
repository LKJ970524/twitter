import { BsHouse } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdLogout, MdLogin } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import { toast } from "react-toastify";
import { IoMdNotificationsOutline } from "react-icons/io";
import useTranslation from "hooks/useTranslation";

export default function MenuList() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const t = useTranslation();

  return (
    <div className="footer">
      <div className="footer__grid">
        <button type="button" onClick={() => navigate("/")}>
          <BsHouse />
          {t("MENU_HOME")}
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <BiUserCircle />
          {t("MENU_PROFILE")}
        </button>
        <button type="button" onClick={() => navigate("/search")}>
          <AiOutlineSearch />
          {t("MENU_SEARCH")}
        </button>
        <button type="button" onClick={() => navigate("/notifications")}>
          <IoMdNotificationsOutline />
          {t("MENU_NOTI")}
        </button>
        {user === null ? (
          <button type="button" onClick={() => navigate("/users/login")}>
            <MdLogin />
            {t("MENU_LOGIN")}
          </button>
        ) : (
          <button
            type="button"
            onClick={async () => {
              const auth = getAuth(app);
              await signOut(auth);
              toast.success(t('TO_LOGOUT'));
            }}
          >
            <MdLogout />
            {t("MENU_LOGOUT")}
          </button>
        )}
      </div>
    </div>
  );
}
