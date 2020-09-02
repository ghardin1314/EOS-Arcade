import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from "./routes";
// Components
import CustomLayout from './containers/Layout';
import LoadingBackdrop from "./components/LoadingBackdrop";

function App() {
  return (
    <Router>
      <CustomLayout>
        <BaseRouter />
      </CustomLayout>
      <LoadingBackdrop />
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
