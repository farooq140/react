import React, { useContext } from 'react'
import UserContext from '../../context/UserContext'

function Profile() {
    const {user}=useContext(UserContext)
    console.log(user)
   if(!user) return <div>"Please Login!!!!" </div>
   return(
    <>
        <h1>welcome  {user.userName}</h1>
    </>
   )
  
}

export default Profile