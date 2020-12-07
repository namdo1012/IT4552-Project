import React from "react";
import firebase from "../../services/firebase/firebase";
import {useSelector,useDispatch} from "react-redux";
import {addLesson} from "../../states/actions/historyCourse";


export const Grammar = ({propsNavi},props) => {
    const {idLesson,stateCourse,stateLesson} = propsNavi;
    const dispatch = useDispatch();
    const dataHistory = useSelector(state => state.history.history)[stateLesson]?.data

    const doneGrammar = () => {
        let db = firebase.doc(`User/yEso5mELSggRpO0qGT5o/History/${stateCourse}`)
        dataHistory.push(idLesson);
        db.update({
            [stateLesson] : {data:dataHistory,process:(dataHistory.length/7).toFixed(2)}
        }).then(
            dispatch(addLesson({lesson:stateLesson,id:idLesson}))
        )
    }

    const updateFB = () => {
        let db = firebase.doc(`User/yEso5mELSggRpO0qGT5o/History/${stateCourse}`)
        db.update({
            [stateLesson] : {data:dataHistory,process:(dataHistory.length/7).toFixed(2)}
        })
    }

    return(
        <>
            <button onClick={() => doneGrammar()}>grammar</button>
            <button onClick={() => updateFB()}>updateFB</button>
        </>
    )
}
