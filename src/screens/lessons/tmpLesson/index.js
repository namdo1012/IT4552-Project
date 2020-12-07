import React from "react";
import {Grammar} from "../grammar";
import {Vocabulary} from "../vocabulary";
import {Reading} from "../reading";
import {Index} from "../test";
import firebase from "../../../services/firebase/firebase";
import {addLesson} from "../../../states/actions/historyCourse";
import {useDispatch, useSelector} from "react-redux";

export const Temp = (props) => {
    const {idLesson, stateCourse, stateLesson} = props.location.state;
    const dispatch = useDispatch();
    const dataHistory = useSelector(state => state.history.history)[stateLesson]?.data
    let checkTypeLess = idLesson.slice(0, 1);

    const done = () => {
        let db = firebase.doc(`User/yEso5mELSggRpO0qGT5o/History/${stateCourse}`)
        let tmp = [...dataHistory, idLesson]
        let updateProcess = parseFloat((tmp.length / 8 * 100).toFixed(2))
        db.update({
            [stateLesson]: {data: tmp, process: updateProcess}
        }).then(() => {
                dispatch(addLesson({lesson: stateLesson, id: idLesson}))
                props.history.goBack()
            }
        )
    }

    switch (checkTypeLess) {
        case 'G' :
            return <Grammar doneLesson={() => done()}/>
        case 'V' :
            return <Vocabulary doneLesson={() => done()}/>
        case 'R' :
            return <Reading doneLesson={() => done()}/>
        case 'T' :
            return <Index doneLesson={() => done()}/>
    }
}
