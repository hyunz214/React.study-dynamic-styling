import React from "react";

// import './UserItem.css';
import styled from "styled-components";

const ListItem = styled.li`
    margin: 1rem 0;
    padding: 1rem 2rem;
    cursor: pointer;
    border: 1px solid black;
`;

const UserItem = (props) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <ListItem className="goal-item" onClick={deleteHandler}>
            {props.children}
        </ListItem>
    );
};

export default UserItem;
