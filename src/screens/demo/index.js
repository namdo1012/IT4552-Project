import React,{ useState, useEffect } from 'react'
import './style.css'
import {addNewLesson, dbN5, getDataLesson} from "../../services/firebase/tutorial.service";

export const Demo = () => {
    const [dataLesson,setDataLesson] = useState(null);
    const [dataNew,setDataNew] = useState(null);

    const btnDataLesson = () => {
        getDataLesson('N5','Lesson1','Grammar',setDataLesson)
    }

    const btnAddNewLesson = () => {
        addNewLesson('yEso5mELSggRpO0qGT5o','N1','L1')
    }
    return(
        <div >
            <button onClick={() =>btnDataLesson()}>
                getDataLesson
            </button>
            {dataLesson !== null ? <p>{dataLesson?.grammar1.title}</p> : null}

            <br/>

            <button onClick={() =>btnAddNewLesson()}>
                add new Lesson
            </button>

        </div>
    )
}
