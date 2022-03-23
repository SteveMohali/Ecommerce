import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Loader from './components/Common/Loader/Loader';
import Home from './components/Home/Home';

function App() {
  return (
   <div>
     <Loader />
     <Layout> 
       <Home />
     </Layout>
   </div>
  );
}

export default App;
