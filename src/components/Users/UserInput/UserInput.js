import React, { useState, useEffect } from "react";
// import styled from "styled-components";

import Button from "../../UI/Button/Button";
import styles from "./UserInput.module.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${(props) => (props.invalid ? "red" : "black")};
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//         background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
// `;

const UserInput = (props) => {
    const [user, setUser] = useState({
        name: "",
        age: "",
    });
    const [isValid, setIsValid] = useState({
        name: false,
        age: false,
    });

    useEffect(() => {
        console.log("user", user);
    }, [user]);

    const changeInputHandler = (event, inputName) => {
        if (event.target.value.length > 0) {
            setIsValid((prev) => {
                return { ...prev, [inputName]: true };
            });
        } else {
            setIsValid((prev) => {
                return { ...prev, [inputName]: false };
            });
        }

        setUser((prev) => {
            return { ...prev, [inputName]: event.target.value };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        if (user.name === "" || user.age === "") {
            alert("모든 정보가 입력되어야 합니다.");
            // setIsValid(false);
            return;
        }
        props.onAddGoal(user);
        setUser({
            name: "",
            age: "",
        });
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`${styles["form-control"]} ${!isValid.name && styles.invalid}`}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" value={user.name} onChange={(e) => changeInputHandler(e, "name")} />
            </div>
            <div className={`${styles["form-control"]} ${!isValid.age && styles.invalid}`}>
                <label htmlFor="age">Age(Years)</label>
                <input type="number" id="age" value={user.age} onChange={(e) => changeInputHandler(e, "age")} />
            </div>
            <Button type="submit">Add User</Button>
        </form>
    );
};

export default UserInput;
