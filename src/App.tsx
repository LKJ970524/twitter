import { Layout } from "components/Layout";
import Loader from "components/Loader/Loader";
import Router from "components/Router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "firebaseApp";
import { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from "recoil";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <RecoilRoot>
      <Layout>
        <ToastContainer
          position="top-left"
          theme="sk"
          autoClose={1000}
          hideProgressBar
          newestOnTop
        />
        {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
      </Layout>
    </RecoilRoot>
  );
}

export default App;
