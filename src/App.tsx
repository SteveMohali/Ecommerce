import React from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import { Toast } from "./Common/Toast/Toast";
import Modal from "./Common/Modal/Modal";
function App() {
  return (
    <div>
      <Layout>
        <Modal />
        <Home />
        <Toast type="success" message="Success" />
      </Layout>
    </div>
  );
}

export default App;
