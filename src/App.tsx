import React from "react";
import ProtonWebSDK from "@proton/web-sdk";

import "./App.css";

function App() {
  const REQUEST_ACCOUNT = "taskly";
  const CHAIN_ID =
    "384da888112027f0321850a169f737c33e53b388aad48b5adace4bab97f437e0";
  const ENDPOINTS = ["https://proton.greymass.com"];

  const login = async () => {
    await ProtonWebSDK({
      linkOptions: {
        endpoints: ENDPOINTS,
        chainId: CHAIN_ID,
      },
      transportOptions: {
        requestAccount: REQUEST_ACCOUNT,
      },
      selectorOptions: {
        appName: "Tasklyy",
        appLogo:
          "https://taskly.protonchain.com/static/media/taskly-logo.ad0bfb0f.svg",
        customStyleOptions: {
          modalBackgroundColor: "#F4F7FA",
          logoBackgroundColor: "white",
          isLogoRound: true,
          optionBackgroundColor: "white",
          optionFontColor: "black",
          primaryFontColor: "black",
          secondaryFontColor: "#6B727F",
          linkColor: "#752EEB",
        },
      },
    });

    window.alert("Successfully connected!");
  };

  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center items-center h-full">
        <div
          onClick={login}
          className="text-3xl h-20 rounded-md bg-slate-400 p-3 text-center pt-5 hover:cursor-pointer font-bold"
        >
          Wallet Connect
        </div>
      </div>
    </div>
  );
}

export default App;
