// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import { createStore } from "redux";

const initialState = 0;
const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return ++state;
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log(store.getState());
store.dispatch({ type: "INC" });
console.log(store.getState());
store.dispatch({ type: "INC" });
console.log(store.getState());
