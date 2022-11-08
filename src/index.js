import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import AppT from "./components/CarTypes/AppT";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="types" element={<AppT />} />
    </Routes>
  </BrowserRouter>


  // <React.StrictMode>
  //   <Router>
  //     <Switch>

  //       <Route exact path="/" component={App} />

  //       <Route path="/types" component={App} />

  //       <Redirect to="/" />
  //     </Switch>
  //   </Router>
  //   <App />
  // </React.StrictMode>
);


