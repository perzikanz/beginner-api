import React, { useEffect } from 'react';

const GetTodo = (props) => {
  const { todos, setTodos } = props;
  const getFetch = async () => {
    try {
      const respose = await fetch('http://localhost:3001/todo/all');
      const json = await respose.json();
      let jobs = [];
      json.forEach((todo) => {
        jobs.push(todo);
      });
      setTodos(jobs);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getFetch();
  });
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{`${todo.id}. ${todo.text}`}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GetTodo;
