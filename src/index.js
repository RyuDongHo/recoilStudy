import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import React from 'react'
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
