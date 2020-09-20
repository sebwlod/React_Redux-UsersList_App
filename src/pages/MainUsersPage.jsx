import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"

import {fetchUsersData} from '../redux/fetchUsersReducer'

import HeaderAppBar from '../components/HeaderAppBar'
import MainPageInfo from '../components/MainPageInfo'

const MainUsersPage = () => {
    const usersUrl = `http://jsonplaceholder.typicode.com/users`
    const usersData = useSelector(state => state)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsersData(usersUrl))
    }, [])

    console.log(usersData)
    return (
        <React.Fragment>
            <HeaderAppBar />
            <MainPageInfo />
        </React.Fragment>
    )
}

export default MainUsersPage;