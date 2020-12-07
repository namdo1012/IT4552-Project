import React from "react";

export const Reading = ({doneLesson,dataLesson}) => {
    console.log('data lesson',dataLesson)

    return(
        <button onClick={doneLesson}>reading</button>
    )
}
