/* import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Button from "./Components/Button";

function App() {
  const [todoValue, setTodoValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodoValue, setEditTodoValue] = useState("");

  let addTodo = () => {
    const todoObj = {
      value: todoValue,
      isEdit: false,
    };
    todoValue === "" ? alert("Cannot Add an Empty Todo") : todos.push(todoObj);
    setTodos([...todos]);
    setTodoValue("");
  };

  let deleteAll = () => {
    setTodos([]);
  };

  let editTodo = (index) => {
    todos.forEach((todo) => {
      todo.isEdit = false;
    });

    todos[index].isEdit = true;
    setTodos([...todos]);
    setEditTodoValue(todos[index].value);
  };

  let deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  let saveTodoValue = (index) => {
    todos[index].value = editTodoValue;
    todos[index].isEdit = false;
    setTodos([...todos]);
  };

  // useEffect(() => {
  //   console.log("component did Mount");
  // }, []);//is swuare bracket ko dependency arr kehte hain
  
  // useEffect(()=>{
  //   console.log("component did update");
  // },[addTodo])


  return (
    <div>
      <Header />

      <div className="flex justify-center  items-center mt-5 flex-col ">
        <div className="w-[70%]">
          <input
            type="text"
            placeholder="Enter Todo"
            className="border border-purple-950 w-full rounded-lg p-3 outline-none"
            value={todoValue}
            onChange={(e) => {
              setTodoValue(e.target.value);
            }}
          />
        </div>

        <div className="flex mt-4">
          <Button
            text="Add Todo"
            clickTrigger={addTodo}
            customClass="bg-green-500 hover:bg-green-700"
          />
          <Button
            text="Delete All"
            clickTrigger={deleteAll}
            customClass="bg-red-500 hover:bg-red-700"
          />
        </div>
      </div>

      <div className="w-[70%] mx-auto mt-5">
        <ul>
          {todos &&
            todos?.map((todo, index) => {
              return todo.isEdit ? (
                <div className="flex mx-auto" key={index}>
                  <input
                    type="text"
                    className="border w-full rounded-lg p-3 outline-none border-gray-600"
                    onChange={(e) => setEditTodoValue(e.target.value)}
                    value={editTodoValue}
                    placeholder="Enter Edited Value"
                  />
                  <Button
                    text="Save"
                    customClass="bg-green-500"
                    clickTrigger={() => saveTodoValue(index)}
                  />
                </div>
              ) : (
                <li
                  key={index}
                  className="text-xl p-3 rounded-lg border border-purple-600 flex justify-between items-center mb-2 bg-white"
                >
                  {todo.value}
                  <div>
                    <Button
                      text="Edit"
                      clickTrigger={() => {
                        editTodo(index);
                      }}
                      customClass="bg-yellow-500 hover:bg-yellow-700"
                    />
                    <Button
                      text="Delete"
                      clickTrigger={() => {
                        deleteTodo(index);
                      }}
                      customClass="bg-red-500 hover:bg-red-700"
                    />
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
export default App; */

import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "../src/Components/Header";
import Button from "../src/Components/Button";

const App = () => {
  let [todos, setTodos] = useState([]);
  let [todoValue, setTodoValue] = useState("");
  let [editTodoValue, setEditTodoValue] = useState("");

  let addTodo = () => {
    let todoObj = {
      value: todoValue,
      isEdit: false,
    };
    todos.push(todoObj);
    setTodos([...todos]);
    setTodoValue("");
    // console.log('Add Todo', todos);
  };

  let dltAll = () => {
    setTodos([]);
    // console.log("Delete All");
  };

  let editTodo = (index) => {
    // console.log("Edit", index);
    todos.forEach((todo) => {
      todo.isEdit = false;
    });
    todos[index].isEdit = true;
    setTodos([...todos]);
    setEditTodoValue(todos[index].value);
  };

  let dltTodo = (index) => {
    // console.log("dlt", index);
    todos.splice(index, 1);
    setTodos([...todos]);
  };

  let saveTodoValue = (index) => {
    // console.log(editTodoValue , "editTodoValue");
    todos[index].value = editTodoValue;
    todos[index].isEdit = false;
    setTodos([...todos]);
  };

  return (
    <>
      <div>
        <Header />
        <input
          type="text"
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
        />
        <Button
          text="Add Todo"
          customClass="bg-green-500"
          clickTrigger={addTodo}
        />
        <Button text="Delete All" clickTrigger={dltAll} />
      </div>

      <div>
        <ul>
          {todos.map((todo, index) => {
            // console.log(todo, 'todo');
            return todo.isEdit ? (
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setEditTodoValue(e.target.value);
                  }}
                  value={editTodoValue}
                />
                <Button
                  text="Save"
                  clickTrigger={() => {
                    saveTodoValue(index);
                  }}
                />
              </div>
            ) : (
              <li key={index}>
                {todo.value}
                <div>
                  <Button
                    text="Edit"
                    clickTrigger={() => editTodo(index)}
                    customClass="bg-green"
                  />
                  <Button text="Delete" clickTrigger={() => dltTodo(index)} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default App;
