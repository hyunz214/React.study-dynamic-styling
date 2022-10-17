import React, { useState, useEffect } from "react";

import UserList from "./components/Users/UserList/UserList";
import UserInput from "./components/Users/UserInput/UserInput";
import "./App.css";

const App = () => {
    const [users, setUsers] = useState([
        // { text: "Do all exercises!", id: "g1" },
        // { text: "Finish the course!", id: "g2" },
    ]);

    const addGoalHandler = (enteredValues) => {
        setUsers((prevGoals) => {
            const updatedUsers = [...prevGoals];
            updatedUsers.unshift({ ...enteredValues, id: Math.random().toString() });
            return updatedUsers;
        });
    };

    const deleteItemHandler = (goalId) => {
        setUsers((prevGoals) => {
            const updatedUsers = prevGoals.filter((goal) => goal.id !== goalId);
            return updatedUsers;
        });
    };

    let content = <p style={{ textAlign: "center" }}>No users found. Maybe add one?</p>;

    if (users.length > 0) {
        content = <UserList items={users} onDeleteItem={deleteItemHandler} />;
    }

    return (
        <div>
            <section id="goal-form">
                <UserInput onAddGoal={addGoalHandler} />
            </section>
            <section id="goals">{content}</section>
        </div>
    );
};

export default App;
