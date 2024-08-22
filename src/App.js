import "./App.css";
import React from "react";
import SNSPage from "./pages/SNSPage/SNSPage";
import { history } from "./utils/history";
import { useLocation, useNavigate } from "react-router-dom";

function App() {
  history.navigate = useNavigate();
  history.location = useLocation();

  return (
    <div>
        <SNSPage />
    </div>
  );
}

export default App;
