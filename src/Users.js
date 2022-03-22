import React from 'react';
import {Link} from 'react-router-dom';

let Users = (props) => {
    return(
        <div className='users-wrapper'>
            {props.users.map(user => (
            <div className='user-wrapper' key={user.uuid}>
               <h2> {user.name.first} </h2>
               <Link to={`/users/${user.login.uuid}`}>
               <img src ={user.picture.medium} alt={`A meme by ${user.name.first}`}/>
                </Link>
               <p>{user.location.state}</p>
               <p>Contact at: {user.email}</p>
                
            </div>
            )
                
            )}
        </div>
    )
}

export default Users;
//HEY WHY ISN'T IT ACCEPTING MY KEY OF USER.UUID ????