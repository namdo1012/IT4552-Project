import React from "react";

export const Test = ({doneLesson,dataLesson}) => {
    console.log('data lesson',dataLesson)
    return(
        <button onClick={doneLesson}>Test</button>
    )
}
