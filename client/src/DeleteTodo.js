import React, { useState } from 'react';

const DeleteTodo = () => {
  const [todoId, settodoId] = useState('');
  const handleChange = (e) => {
    settodoId(e.target.value);
  };
  const requestOptions = {
    method: 'DELETE',
  };
  const handleSubmit = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/todo/${todoId}`,
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
        delete todo id:
        <input type='text' value={todoId} onChange={handleChange} />
      </label>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default DeleteTodo;
