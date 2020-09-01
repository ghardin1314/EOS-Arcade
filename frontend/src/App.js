import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from "./routes";
// Components
import CustomLayout from './containers/Layout';
//import LoadingBackdrop from "./components/LoadingBackdrop";

function App() {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
      {/*<LoadingBackdrop />*/}
    </Router>
  );
}

export default App;
