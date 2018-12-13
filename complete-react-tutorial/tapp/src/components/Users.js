import React from 'react'


const Users = ({users}) => {
    // const userList = users.map(user => {
    //     if (user.age > 30) {
    //         return (
    //             <div className="new-comp" key={user.uid}>
    //                 <div>Name: {user.name}</div>
    //                 <div>Age: {user.age}</div>
    //                 <div>Status: {user.status}</div>
    //                 <hr/>
    //             </div>
    //         )
    //     } else {
    //         return null;
    //     }
    // });

    const userList = users.map(user => {
        return user.age > 15 ? (
            <div className="new-comp" key={user.uid}>
                <div>Name: {user.name}</div>
                <div>Age: {user.age}</div>
                <div>Status: {user.status}</div>
                <hr/>
            </div>

        ) : null;
    });

    return (
        <div className="users-list">
            { userList }
        </div>
    );
};

export default Users