import React from 'react';

const GetTodo = (props) => {
  const { todos, setTodos } = props;
  const onClick = async () => {
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
  // const checkOnChange = () => {};
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
      >
        show todo all
      </button>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <p>{`${todo.id}. ${todo.text}`}</p>
              {/* <input
                type='checkbox'
                checked={todo.checked === 1}
                onChange={checkOnChange}
              /> */}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default GetTodo;
