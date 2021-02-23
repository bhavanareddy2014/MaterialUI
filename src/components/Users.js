import React,{useEffect} from 'react'
import {Box,Typography} from '@material-ui/core';
import {getUserData} from '../Store/Actions/users';
import {useSelector,useDispatch} from 'react-redux';

function Users() {
    const users = useSelector(state => state.users.usersData)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUserData())
         },[])
         console.log(users);
         const usersList = users.length ?(
             users.map(user =>{
                 return(<div key={user.id}>
                    <h1>{user.name}</h1>
                    <h3>{user.username}</h3>
                    <h4>{user.email}</h4>
                   
                    </div>)
             })
         ):(<div> no users yet</div>)
    return (
        <Box py={5} textAlign="center">
        <Typography variant = "h4" padding-top="20"> Users   page
        </Typography>
        {usersList}
        </Box>
    )
}

export default Users

