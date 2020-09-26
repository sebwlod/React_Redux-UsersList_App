import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux"

import {fetchUsersData} from '../redux/fetchUsersReducer'

import MainPageInfo from '../components/MainPageInfo'
import UsersContent from '../components/UsersContent'
import UsersActions from '../components/UserActions'

const MainUsersPage = () => {
    const [sortValue, setSortValue] = useState("")
    const [inputTextValue, setInputTextValue] = useState("")
    const usersUrl = `http://jsonplaceholder.typicode.com/users`
    const usersData = useSelector(state => state.fetchUsersData.usersData)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchUsersData(usersUrl))
    }, [])

    const filteredUsersList = inputTextValue ? usersData.filter(user => {
        return user.name.includes(inputTextValue) || user.username.includes(inputTextValue)
    }) : usersData
    
    const sortedUsersList = sortValue ? filteredUsersList.sort((prev, next) => {
        return prev[sortValue] > next[sortValue]
    }) : filteredUsersList



    return (
        <React.Fragment>
            <MainPageInfo />
            <UsersActions inputTextValue={inputTextValue} setInputTextValue={setInputTextValue} setSortValue={setSortValue}/>
            <UsersContent sortedUsersList={sortedUsersList}/>
        </React.Fragment>
    )
}

export default MainUsersPage;