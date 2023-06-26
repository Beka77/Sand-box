import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
import { createStore } from "redux";
import reducer from "./reducer";
import Capp from "./components/Capp"
import { Provider } from "react-redux";
const store = createStore(reducer);
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Provider store={store} >
        <Capp/>
      </Provider>
    </React.StrictMode>
  );
