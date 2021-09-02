import "./App.css";
import { useState } from "react";

import RestrictedPage from "./components/RestrictedPage/index";

const user = "Smilly";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const Login = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const Logout = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage
          isLoggedIn={isLoggedIn}
          user={user}
          Login={Login}
          Logout={Logout}
        />
      </div>
    </div>
  );
}

export default App;
