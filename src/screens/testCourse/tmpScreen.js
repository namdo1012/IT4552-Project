import React from "react";
import {Grammar} from "./Grammar";
import {Voca} from "./Voca";
import {Reading} from "./Reading";
import {Test} from "./Test";

export const Temp = (props) => {
    const {idLesson,stateCourse,stateLesson} = props.location.state;
    let checkTypeLess = idLesson.slice(0,1);
    let propsNavi = {idLesson,stateCourse,stateLesson}

    switch (checkTypeLess) {
        case 'G' : return <Grammar propsNavi={propsNavi} props={props}/>
        case 'V' : return <Voca/>
        case 'R' : return <Reading/>
        case 'T' : return <Test/>
    }
}
