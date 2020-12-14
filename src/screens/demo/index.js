import React,{ useState, useEffect } from 'react'
import './style.css'
import {addNewLesson, dbN5, getDataLesson} from "../../services/firebase/tutorial.service";
import firebase from "../../services/firebase/firebase";

export const Demo = () => {

    const addHistory = (id) => {
        let obj = {
            L1:{data:[],process:0},
            L2:{data:[],process:0},
            L3:{data:[],process:0},
            L4:{data:[],process:0},
            L5:{data:[],process:0},
        }
        for (let i= 1; i<6; i++){
            firebase.doc(`User/${id}/History/N${i}`).set(obj)
        }
    }

    return(
        <div >
            <button onClick={() => addHistory('abcxyz')}>add history</button>
        </div>
    )
}
