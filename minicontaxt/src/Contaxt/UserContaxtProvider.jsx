import React, { Children } from 'react'
import UserContaxt from './UserContaxt'
import { useState } from 'react'

const UserContaxtProvider = ({children}) => {
    const [user, setUser] = React.useState(null)

  return (
    <UserContaxt.Provider value={{user, setUser}}>
      {children}
    </UserContaxt.Provider>
  )
}

export default UserContaxtProvider
