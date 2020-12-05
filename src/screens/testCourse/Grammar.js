import React from "react";
import firebase from "../../services/firebase/firebase";
import {useSelector} from "react-redux";

export const Grammar = ({propsNavi}) => {
    const {idLesson,stateCourse,stateLesson} = propsNavi;
    const dataHistory = useSelector(state => state.history.history)[stateLesson]?.data
    const doneGrammar = () => {
        let db = firebase.doc(`User/yEso5mELSggRpO0qGT5o/History/${stateCourse}`)
        dataHistory.push(idLesson)
        console.log(propsNavi)
        db.update({
            [stateLesson] : dataHistory
        })
    }

    return(
        <button onClick={() => doneGrammar()}>grammar</button>
    )
}
