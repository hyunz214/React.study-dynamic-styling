import React from "react";

import UserItem from "../UserItem/UserItem";
// import "./UserList.css";
import styled from "styled-components";

const ListWrapper = styled.ul`
    margin: 0;
    list-style: none;
    padding: 2rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
`;

const UserList = (props) => {
    return (
        <ListWrapper>
            {props.items.map((goal) => (
                <UserItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
                    {`${goal.name} (${goal.age} years old)`}
                </UserItem>
            ))}
        </ListWrapper>
    );
};

export default UserList;
