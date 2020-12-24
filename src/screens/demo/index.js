// import React,{ useState, useEffect } from 'react'
import React from "react";
import "./style.css";
// import {addNewLesson, dbN5, getDataLesson} from "../../services/firebase/tutorial.service";
import {firestore, firebaseAuth} from "../../services/firebase/firebase";

export const Demo = () => {
  const UID = firebaseAuth.currentUser?.uid;
  console.log(UID);

  const addHistory = (id) => {
    let obj = {
      L1: { data: [], process: 0 },
      L2: { data: [], process: 0 },
      L3: { data: [], process: 0 },
      L4: { data: [], process: 0 },
      L5: { data: [], process: 0 },
    };
    for (let i = 1; i < 6; i++) {
      firestore.doc(`User/${id}/History/N${i}`).set(obj);
    }
  };

  return (
    <div>
      <button onClick={() => addHistory("abcxyz")}>add history</button>
    </div>
  );
};
