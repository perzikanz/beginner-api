import React, { useState } from 'react';
import PostTodo from './PostTodo';
import GetTodo from './GetTodo';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>ToDo list</h1>
      <PostTodo />
      <GetTodo todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
