import React from 'react'
import {NavBar} from "../../components/NavBar";
import './style.css'
import {Button, ProgressBar, ListGroup} from 'react-bootstrap'
import {ProcessCard} from '../../components/ProcessCard'
import {TotalCard} from "../../components/TotalCard";

export const Course = () => {
    const level = [
        {id: 1, name: 'N5'},
        {id: 2, name: 'N4'},
        {id: 3, name: 'N3'},
        {id: 4, name: 'N2'},
        {id: 5, name: 'N1'}
    ]
    const listCourse = [
        {id: 1, name: 'Buổi học số 1'},
        {id: 2, name: 'Buổi học số 2'},
        {id: 3, name: 'Buổi học số 3'},
        {id: 4, name: 'Buổi học số 4'},
        {id: 5, name: 'Buổi học số 5'},
    ]
    return (
        <>
            {/*<NavBar/>*/}

            {/*Level*/}
            <div className="ctn-level">
                {level.map(item =>
                    <Button className="ctn-col">{item.name}</Button>
                )}
            </div>

            {/*cnt courses*/}
            <div className="ctn-course">
                {/*list Course*/}
                <div className="ctn-list-course">
                    <div className="ctn-sub-list-course">
                        <p className="txt-title">DANH SÁCH BUỔI HỌC</p>

                        <ListGroup style={{paddingBottom: 100}}>
                            {listCourse.map(item =>
                                <ListGroup.Item className="ctn-list-group">{item.name}
                                    <ProgressBar now={60} label={`${60}%`}
                                                 className="item-progressBar"
                                    />
                                    <span className="percent-process">27%</span>

                                </ListGroup.Item>
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
