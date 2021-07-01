import React, { useState } from 'react';

const PostTodo = () => {
  const [todo, setTodo] = useState('');
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: todo }),
  };
  const handleSubmit = async () => {
    console.log(todo);
    try {
      const response = await fetch(
        'http://localhost:3001/todo',
        requestOptions
      );
      console.log(response.status);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        todo:
        <input type='text' value={todo} onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default PostTodo;
