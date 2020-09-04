import React from "react";

import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

import CustomLayout from "./containers/Layout";
import LoadingBackdrop from "./components/LoadingBackdrop";

function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter />
        </CustomLayout>
        <LoadingBackdrop />
      </Router>
    </div>
  );
}

export default App;
