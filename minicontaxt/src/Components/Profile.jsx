import React, { useContext } from 'react'
import UserContaxt from '../Contaxt/UserContaxt'

const Profile = () => {

    const {user} = useContext (UserContaxt)
  
    if (! user) return <div>Please Login</div>
    return <div>Welcome {user.username}</div>
}

export default Profile
