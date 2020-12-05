import React from "react";
import {Grammar} from "./Grammar";
import {Voca} from "./Voca";
import {Reading} from "./Reading";
import {Test} from "./Test";

export const Temp = (props) => {
    const {idLesson,stateCourse,stateLesson} = props.location.state;
    let checkTypeLess = idLesson.slice(0,1);
    let propsNavi = {idLesson,stateCourse,stateLesson}
    console.log('ppp',propsNavi)
    switch (checkTypeLess) {
        case 'G' : return <Grammar propsNavi={propsNavi}/>
        case 'V' : return <Voca/>
        case 'R' : return <Reading/>
        case 'T' : return <Test/>
    }
}
