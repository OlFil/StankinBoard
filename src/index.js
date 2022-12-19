import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { app } from './component/firebase';
import { auth } from './component/firebase';
import { db } from './component/firebase';
/*import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';*/


export const Context = createContext(null)
/*
const auth = firebase.auth();
const firestore = firebase.firestore()*/


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value = {
    {
      app,
      auth,
      db
    }
  }>
  <React.StrictMode>
      <App/>
  </React.StrictMode>
 </Context.Provider>
);

/*
ReactDOM.render(
  <Context.Provider value = {
    {
      app,
      auth,
      db
    }
  }>
   <App/>
    </Context.Provider>,
   document.getElementById('root')
   
);*/


