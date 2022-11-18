import { useState, useEffect } from "react";
// axios for sending http req to backend
import axios from "axios";
// RRD for representations of the http req's
import { link } from "react-router-dom";

// DisplayTodo's purpose is to make an api call to display data from mongodb
const DisplayTodo = () => {
  // useState to track the todo data, default values being part of an array.
  const [todoData, setTodoData] = useState([]);

  // useEffect for the axios GET req.
  useEffect(
    axios
      .get("http://localhost:3000/api/todoapp")
      .then((res) => {
        console.log(res.data);
        setTodoData(res.data);
      })
      .catch((err) => console.log(err)),
    []
  );

  //
  return <div>DisplayTodo</div>;
};

DisplayTodo;
