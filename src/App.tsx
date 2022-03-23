import React from "react";
import Layout from "./components/Layout/Layout";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import "./App.css";

function App() {
  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <div>
          <Layout />
        </div>
      </Provider>
    </PersistGate>
  );
}

export default App;
