import React, { Component } from 'react'


const Users = (props) => {
    const { users } = props;
    const userList = users.map(user => {
        return (
            <div className="new-comp" key={ user.uid }>
                <div>Name: { user.name }</div>
                <div>Age: { user.age }</div>
                <div>Status: { user.status }</div>
                <hr />
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