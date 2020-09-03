import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import BaseRouter from "./routes";
// Components
import CustomLayout from './containers/Layout';
import LoadingBackdrop from "./components/LoadingBackdrop";
import CssBaseline from "@material-ui/core/CssBaseline";


class App extends React.Component {
  render(){
  return (
    <div>
    <Router>
      <CssBaseline/>
      {/* <Paper>
        Test 1
      </Paper> */}
      <CustomLayout>
      {/* <Paper>
        Test 2
      </Paper> */}
        <BaseRouter />
      </CustomLayout>
      <LoadingBackdrop />
    </Router>
    </div>
  );}
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(App);
