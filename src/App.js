import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import app from "./fbase"
import {navigate} from "hookrouter";
import * as firebase from "firebase/app";
import 'firebase/firestore';

function App() {

  useEffect(()=>{
    async function getFBase() {
      const db = await firebase.firestore(app);
      let mainsDB = await db.collection(`mains`).get();
      console.log(mainsDB.docs.map(doc => doc.data()))
    }
    getFBase();

  },[])
  return (
    <div className="App">

    </div>
  );
}

export default App;
