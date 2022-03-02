import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import {store} from "./redux/reducers"
//import reportWebVitals from './reportWebVitals';



// const INITIAL_STATE={angka:0}
// const angkaReucers = (state= INITIAL_STATE,action)=>{
//   switch(action.type){
//     case "TAMBAH" :
//       //... untuk mrngubah isi object, object state
//       return {...state, angka: state.angka + 1};
//       case "KURANG":
//         return { ...state, angka: state.angka - 1}
//       break;
      
//       default:
//         return state
//   }
// }
//  const store = createStore(angkaReucers);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
