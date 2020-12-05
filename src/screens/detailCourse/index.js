import React from "react";
import {ProcessCard} from "../../components/ProcessCard";
import {TotalCard} from "../../components/TotalCard";
import './style.css'
import {CgFileDocument} from "react-icons/cg"
import firebase from "../../services/firebase/firebase";
import {CircleLesson} from "../../components/CircleLesson";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

export const DetailCourse = (props) => {
    const {stateCourse,stateLesson,nameLesson} = props.location.state;
    const dataHistory = useSelector(state => state.history.history)[stateLesson]?.data
    let numberLesson = stateLesson.slice(-1)
    let listLesson = [
        {id: 1, title: `Từ vựng ${stateCourse} - Bài số ${numberLesson}`,data: [{id:'V1'},{id:'V2'},{id:'V3'}]},
        {id: 2, title: `Ngữ pháp ${stateCourse} - Bài số ${numberLesson}`,data: [{id:'G1'},{id:'G2'},{id:'G3'}]},
        {id: 3, title: `Đọc hiểu ${stateCourse} - Bài số ${numberLesson}`,data: [{id:'R1'}]},
        {id: 4, title: `Kiểm tra ${stateCourse} - Bài số ${numberLesson}`,data: [{id:'T1'}]},
    ]

    const getProcess = (btnCourse) => {
        const db = firebase.doc(`/User/yEso5mELSggRpO0qGT5o/History`)
        db.get().then(
            doc => {
                if (doc.exists) {
                    let data = doc.data();
                } else {
                    console.log('noo have')
                }
            }
        )
    }
    return (
        <>
            <div className="ctn-course">
                <div className="ctn-list-course">
                    <div className="ctn-sub-list-course">
                        <p className="txt-title">{nameLesson}</p>

                        {listLesson.map(item =>
                            <div style={{marginBottom: 50}} key={item.id}>
                                <div style={{flexDirection: 'row'}}>
                                    <div className="item-small-dot"/>
                                    <span className="txt-lesson">{item.title}</span>
                                </div>
                                <div className="ctn-process">
                                    {item.data.map(item2 =>
                                        <Link to={{
                                            pathname: `/course/${stateCourse}/${stateLesson}/${item2.id}`,
                                            state : {
                                                idLesson: item2.id,
                                                stateCourse:stateCourse,
                                                stateLesson:stateLesson
                                            }
                                        }}
                                              key={item2.id}
                                        >
                                        <CircleLesson key={item2.id} checkDone={dataHistory} id={item2.id}/>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        )}

                    </div>
                </div>

                <div className="ctn-process-course">
                    <TotalCard/>
                    <div className="list-lesson">
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                        <ProcessCard title={'Buổi học số 1'} description={'Đã hoàn thành'} total={240}/>
                    </div>
                </div>
            </div>
        </>
    )
}
