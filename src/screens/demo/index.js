import React,{ useState, useEffect } from 'react'
import './style.css'
import {dbN5, getDataLesson} from "../../services/firebase/tutorial.service";

export const Demo = () => {
    const [dataLesson,setDataLesson] = useState(null);

    const btnDataLesson = () => {
        getDataLesson('N5','Lesson1','Grammar',setDataLesson)
    }

    return(
        <div >
            <button onClick={() =>btnDataLesson()}>
                getDataLesson
            </button>
            {dataLesson !== null ? <p>{dataLesson?.grammar1.title}</p> : null}

            <br/>

            <button onClick={() =>btnDataLesson()}>
                getDataLesson
            </button>
            {dataLesson !== null ? <p>{dataLesson?.grammar1.title}</p> : null}

        </div>
    )
}
