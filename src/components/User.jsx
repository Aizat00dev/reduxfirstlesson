import { useState } from "react"




export default function User({usersInfo}){

   const [getMore, setGetMore] = useState(false)
     
   function toggle(){
    setGetMore(prevState => !prevState)
   }  
    
    return(
        <div>
            <ul>
            <li>name: {usersInfo.name}</li>
            <li>email: {usersInfo.email}</li>
            
            
                { getMore && <li> username: {usersInfo.username}</li>}
                {getMore && <li>phone: {usersInfo.phone}</li>}
                {getMore &&<li>website: {usersInfo.website}</li>}
                {getMore && <li>address: {usersInfo.address.street} {usersInfo.address.suite} {usersInfo.address.city}</li>}
            <button onClick={toggle}>{getMore ? 'hide': 'get more'}</button>
            </ul>  
           
            
        </div>
            
        
    )
}