import React from 'react'


const Users = ({users, deleteUserFn}) => {

    const userList = users.map(user => {
        return (
            <div className="new-comp" key={user.uid}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>Status: {user.status}</div>
                <button onClick={(uid) => deleteUserFn(user.uid)}>Remove user w/ uid {user.uid}</button>
                <hr/>
            </div>
        )

    });

    return (
        <div className="users-list">
            { userList }
        </div>
    );
};

export default Users