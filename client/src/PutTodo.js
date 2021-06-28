import React, { useState } from 'react';

const PutTodo = () => {
  const [todoId, setTodoId] = useState('');
  const [checked, setChecked] = useState('true');
  const idHandleChange = (e) => {
    setTodoId(e.target.value);
  };
  const checkedHandleChange = (e) => {
    setChecked(e.target.value);
  };
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ checked: checked }),
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
        todoID:
        <input type='text' value={todoId} onChange={idHandleChange} />
      </label>
      <select value={checked} onChange={checkedHandleChange}>
        <option value='true'>true</option>
        <option value='false'>false</option>
      </select>
      <input type='submit' value='Submit' />
    </form>
  );
};

export default PutTodo;
