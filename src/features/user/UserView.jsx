import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

export const UserView = () => {
    const user = useSelector((state) => state.user )
    console.log(user.user);
    const dispatch = useDispatch()
   useEffect(() =>{
        dispatch(fetchUser())
    },[])
  return (
    <>
    <div>List Of Users</div>
    {user.loading && <div>Loading...</div>}
    {!user.loading && user.error ? <div>Error : {user.error}</div> : null}
    {!user.loading && user.user.length ? (
        <ul> {user.user.map(user => {
           return <li key = {user.id}>{user.name}</li>
        })}</ul>
    ) : null}
    </>


  )
}
