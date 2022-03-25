import React from "react";
import { Provider } from "react-redux";
import Modal from "./Common/Modal/Modal";
import { store, persistor } from "./store";
import { Toast } from "./Common/Toast/Toast";
import Auth from "Screens/Login-Signup/Auth";
import Layout from "./components/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";

// CSS Styles
import "./App.css";
import 'react-loading-skeleton/dist/skeleton.css'

//Skeleton Loader
//<Skeleton /> // Simple, single-line loading skeleton
//<Skeleton count={5} />

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
         <Layout>
        {/* <Modal /> */}
        <Toast type="success" message="Success" />
      </Layout>
      <Auth />
      </Provider>
    </PersistGate>
  );
}
  export default App;
