import React,{useState} from 'react'
import {NavBar} from "../../components/NavBar";
import './style.css'
import {Button, ProgressBar, ListGroup} from 'react-bootstrap'
import {ProcessCard} from '../../components/ProcessCard'
import {TotalCard} from "../../components/TotalCard";
import firebase from "../../services/firebase/firebase";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {storeHistory} from "../../states/actions/historyCourse";


export const Course = () => {
    const [course,setCourse] = useState('N1')
    const [less,setLess] = useState(null)
    const dispatch = useDispatch();
    const level = [
        // {id: 1, name: 'N5'},
        // {id: 2, name: 'N4'},
        // {id: 3, name: 'N3'},
        {id: 4, name: 'N2'},
        {id: 5, name: 'N1'}
    ]
    const listCourse = [
        {id: 'L1', name: 'Buổi học số 1'},
        {id: 'L2', name: 'Buổi học số 2'},
        {id: 'L3', name: 'Buổi học số 3'},
        {id: 'L4', name: 'Buổi học số 4'},
        {id: 'L5', name: 'Buổi học số 5'},
    ]
    const getProcess = (btnCourse) => {
        setCourse(btnCourse)
        const db = firebase.doc(`/User/yEso5mELSggRpO0qGT5o/History/${course}`)
        db.get().then(
            doc => {
                if (doc.exists) {
                    let data = doc.data();
                    console.log('have',course,data)
                    setLess(data)
                    dispatch(storeHistory(data))
                } else {
                    console.log('noo have')
                }
            }
        )
    }

    return (
        <>
            {/*<NavBar/>*/}

            {/*Level*/}
            <div className="ctn-level">
                {level.map(item =>
                    <Button className="ctn-col"
                            onClick={() => getProcess(item.name)}
                            key={item.id}
                    >
                        {item.name}
                    </Button>
                )}
            </div>

            {/*cnt courses*/}
            <div className="ctn-course">
                {/*list Course*/}
                <div className="ctn-list-course">
                    <div className="ctn-sub-list-course">
                        <p className="txt-title">DANH SÁCH BUỔI HỌC</p>

                        <ListGroup style={{paddingBottom: 100}} >
                            {listCourse.map(item =>
                                <Link to={{
                                    pathname: `/course/${course}/${item.id}`,
                                    state: {
                                        stateCourse:course,
                                        stateLesson:item.id,
                                        nameLesson:item.name
                                    }
                                }}
                                      key={item.id}
                                >
                                    <ListGroup.Item className="ctn-list-group" >{item.name}
                                        <ProgressBar now={less?less[item.id]?.process:0} label={`${less?less[item.id]?.process:0}%`}
                                                     className="item-progressBar"
                                        />
                                        <span className="percent-process">{less?less[item.id]?.process:0}%</span>

                                    </ListGroup.Item>
                                </Link>
                            )}
                        </ListGroup>
                    </div>
                </div>

                {/*cnt process*/}
                <div className="ctn-process-course">
                    <ProcessCard title={'Bài học'} description={'Đã hoàn thành'} total={240}/>
                    <ProcessCard title={'Bài học'} description={'Đã hoàn thành'} total={240}/>
                    <ProcessCard title={'Bài học'} description={'Đã hoàn thành'} total={240}/>
                    <ProcessCard title={'Bài học'} description={'Đã hoàn thành'} total={240}/>
                    <TotalCard/>
                </div>
            </div>

            {/*Footer*/}
            <div/>
        </>
    )
}
