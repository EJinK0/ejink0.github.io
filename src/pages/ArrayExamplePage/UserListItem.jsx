import React from 'react'

function UserListItem({ userItem, onToggle }) {
    return (
        <div className={`userListItem ${userItem.active ? `active` : ``}`}
            onClick={() => onToggle(userItem.id)}>
            <b>{userItem.username}</b> <span>({userItem.email})</span>
        </ div>
    )
}

export default UserListItem
