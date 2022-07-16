import React from "react";
import ProtonWebSDK from "@proton/web-sdk";

import "./App.css";

function App() {
  const login = async () => {
    await ProtonWebSDK({
      linkOptions: {
        endpoints: ["https://api-dev.protonchain.com/v1/chain/info"],
      },
      transportOptions: {},
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
  };

  return (
    <>
      <div onClick={login} className="text-3xl font-bold">
        Wallet Connect
      </div>
    </>
  );
}

export default App;
