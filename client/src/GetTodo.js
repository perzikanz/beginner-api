import React from 'react';

const GetTodo = () => {
  const onClick = async () => {
    try {
      const respose = await fetch('http://localhost:3001/todo/all');
      const json = await respose.json();
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <button
        onClick={() => {
          onClick();
        }}
      >
        show todo all
      </button>
    </>
  );
};

export default GetTodo;
