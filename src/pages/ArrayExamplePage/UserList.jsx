import React from 'react';
import UserListItem from './UserListItem';

function UserList({ userList, onToggle }) {
    return (
        <div className='userList'>
            {userList.map((user, idx) => (
                <UserListItem userItem={user} key={idx} onToggle={onToggle} />
            ))}
        </div>
    )
}

export default UserList;
