import React, { useState } from "react";

import * as SDK from "../src/web-sdk";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    actor: "",
  });

  const clear = () =>
    setUser({
      actor: "",
    });

  const login = async (reconnect: boolean = false) => {
    clear();

    if (reconnect) {
      await SDK.reconnect();
    } else {
      await SDK.login();
    }

    if (SDK.session && SDK.session.auth) {
      setUser({
        actor: SDK.session.auth.actor.toString(),
      });
    }
  };

  const logout = async () => {
    await SDK.logout();
    clear();
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center h-full">
        {!user.actor ? (
          <div
            onClick={() => login()}
            className="cursor-pointer whitespace-nowrap bg-purple-100 border border-transparent rounded-md py-2 px-4 inline-flex items-center justify-center text-base font-medium text-purple-600 hover:bg-purple-200"
          >
            Login
          </div>
        ) : (
          <div
            className="cursor-pointer whitespace-nowrap bg-purple-100 border border-transparent rounded-md py-2 px-4 inline-flex items-center justify-center text-base font-medium text-purple-600 hover:bg-purple-200"
            onClick={logout}
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
