import React,{ useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {handleLoginSuccess} from '../../services'
import {loginSuccess} from '../../states/actions/user'
import './style.css'

export const Demo = () => {
    const dispatch = useDispatch()
    const {userInfor} = useSelector(state => state.user) // get state from store

    console.log('fdasfaf',userInfor)
    useEffect(() => {
        handleLoginSuccess.getUser().then(
            res => {
                const data = res.data.results
                dispatch(loginSuccess(data)) //dispatch action
            }
        )
    },[])

    return(
        <div className="demo">
            <p>Demo page</p>
        </div>
    )
}
