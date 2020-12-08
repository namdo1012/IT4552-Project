import React from "react";

export const Grammar = ({doneLesson,dataLesson} ) => {
    console.log('data lesson',dataLesson)
    return(
        <>
            <button onClick={doneLesson}>grammar</button>
            <p>{dataLesson?.title}</p>
        </>
    )
}
