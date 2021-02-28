import React, { useState, useEffect } from "react";
import axios from "axios";

import PropTypes from "prop-types";

TodoListIndex.propTypes = {};

function TodoListIndex(props) {
  const [toDoList, setToDoList] = useState([
    { name: "aaa" },
    { name: "bbb" },
    { name: "ccc" },
  ]);
  const [postList, setPostList] = useState([]);

  const [nameTodo, setNameTodo] = useState("");

  useEffect(() => {
    async function getPostList() {
      const postList = await axios
        .get("http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1")
        .then((response) => {
          return response.data.data;
        });

      setPostList(postList);
    }

    getPostList();
  }, []);


  useEffect(() =>{
      console.log('effect 22222222');
  })


  function handDelTodo(index) {
    const newToDoList = toDoList.filter((todo, indexTodo) => {
      return index !== indexTodo;
    });
    setToDoList(newToDoList);
  }

  function handNameChange(event) {
    const valueInput = event.target.value;

    setNameTodo(valueInput);
  }

  function handAddTodo() {
    const newTodo = {
      name: nameTodo,
    };
    setToDoList([...toDoList, newTodo]);
    setNameTodo("");
  }

  return (
    <React.Fragment>
      <input type="text" value={nameTodo} onChange={handNameChange}></input>
      <button onClick={handAddTodo}>+</button>
      <ul>
        {toDoList.map((todo, index) => {
          return (
            <li key={index}>
              {todo.name} <button onClick={() => handDelTodo(index)}>x</button>
            </li>
          );
        })}
      </ul>
      <ul>
        {postList.map((todo, index) => {
          return (
            <li key={index}>
              {todo.title}
              {/* <button onClick={() => handDelTodo(index)}>x</button> */}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
}

export default TodoListIndex;
