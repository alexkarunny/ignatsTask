import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import preloader from '../../assets/images/preloader.gif'
import {loadingAC} from "./bll/loadingReducer";
import classes from './HW10.module.css'


function HW10() {
    // useSelector, useDispatch
    const loading = useSelector<AppStoreType, boolean>(state => state.loading.isLoading)

    const dispatch = useDispatch()

    const setLoading = () => {
        dispatch(loadingAC(true))

        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
        console.log('loading...')
    };

    return (
        <div >
            <hr/>
            homeworks 10
            {loading
                ? <div className={classes.wrap}><img src={preloader} alt="" className={classes.preloader}/></div>
                : <div><SuperButton onClick={setLoading}>set loading...</SuperButton></div>
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
