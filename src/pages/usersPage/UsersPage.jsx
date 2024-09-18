import { useDispatch, useSelector } from "react-redux"
import { fetchUsersAction } from "../../redux/action"
import User from "../../components/User"



export default function UsersPage(){

    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users)

    

    return(
        <div>
            
            <button onClick={()=> dispatch(fetchUsersAction())}>get users</button>
            {users.map(user => <User key = {user.id} usersInfo={user}/>)}
        </div>
    )
}