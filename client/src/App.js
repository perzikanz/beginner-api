import React, { useState } from 'react';
import PostTodo from './PostTodo';
import GetTodo from './GetTodo';
import DeleteTodo from './DeleteTodo';
import PutTodo from './PutTodo';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <h1>ToDo list</h1>
      <GetTodo todos={todos} setTodos={setTodos} />
      <PostTodo />
      <PutTodo />
      <DeleteTodo />
    </>
  );
}

export default App;
