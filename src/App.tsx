import { Layout } from "components/Layout";
import Router from "components/Router";
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";
import { useState } from "react";

function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  console.log(auth, isAuthenticated);

  return (
    <Layout>
      <Router isAuthenticated={isAuthenticated} />
    </Layout>
  );
}

export default App;
