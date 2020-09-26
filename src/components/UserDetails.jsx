import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const UserDetails = (props) => {
    const currentUserId = props.match.params.id
    const currentUser = []
    const oneUser = currentUser.filter(user => user.id === 1)
    useEffect(() => {
        //const currentUser = useSelector(state => state.fetchUsersData.usersData.filter(user => user.id === currentUserId))
    }, [])

    return (
        <div>test</div>
    )
}

export default UserDetails