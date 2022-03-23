import React from "react";
import Layout from "./components/Layout/Layout";
import { Toast } from "./Common/Toast/Toast";
import Modal from "./Common/Modal/Modal";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import "./App.css";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
         <Layout>
        <Modal />
        <Toast type="success" message="Success" />
      </Layout>
      </Provider>
    </PersistGate>
  );
}
  export default App;
