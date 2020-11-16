import React from "react";
import {ProcessCard} from "../../components/ProcessCard";
import {TotalCard} from "../../components/TotalCard";
import './style.css'

export const DetailCourse = () => {
    let listLesson = [
        {id: 1, title: 'Kanji cơ bản N4-Bài số 1'},
        {id: 2, title: 'Kanji cơ bản N4-Bài số 1'},
        {id: 3, title: 'Kanji cơ bản N4-Bài số 1'},
        {id: 4, title: 'Kanji cơ bản N4-Bài số 1'},
        {id: 5, title: 'Kanji cơ bản N4-Bài số 1'},
    ]
    return (
        <>
            <div className="ctn-course">
                <div className="ctn-list-course">
                    <div className="ctn-sub-list-course">
                        <p className="txt-title">Buổi học số 1</p>

                        {listLesson.map(item =>
                            <div style={{marginBottom: 50}}>
                                <div style={{flexDirection: 'row',}}>
                                    <div className="item-small-dot"/>
                                    <span style={{color: 'white', fontSize: 25}}>{item.title}</span>
                                </div>
                                <div style={{flexDirection: 'row', marginLeft: 70, marginTop: 30}}>
                                    <div className="item-dot"/>
                                    <div className="item-dot"/>
                                    <div className="item-dot"/>
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
