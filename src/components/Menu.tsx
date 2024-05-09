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
          <span className="footer__gird-text">{t("MENU_HOME")}</span>
        </button>
        <button type="button" onClick={() => navigate("/profile")}>
          <BiUserCircle />
          <span className="footer__gird-text">{t("MENU_PROFILE")}</span>
        </button>
        <button type="button" onClick={() => navigate("/search")}>
          <AiOutlineSearch />
          <span className="footer__gird-text">{t("MENU_SEARCH")}</span>
        </button>
        <button type="button" onClick={() => navigate("/notifications")}>
          <IoMdNotificationsOutline />
          <span className="footer__gird-text">{t("MENU_NOTI")}</span>
        </button>
        {user === null ? (
          <button type="button" onClick={() => navigate("/users/login")}>
            <MdLogin />
            <span className="footer__gird-text">{t("MENU_LOGIN")}</span>
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
            <span className="footer__gird-text">{t("MENU_LOGOUT")}</span>
          </button>
        )}
      </div>
    </div>
  );
}
