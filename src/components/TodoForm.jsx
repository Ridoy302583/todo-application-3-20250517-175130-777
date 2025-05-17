import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex items-center">
        <h2 className="text-xl font-semibold">Add New Task</h2>
      </div>
      
      <div className="flex space-x-2">
        <input
          type="text"
          className="input flex-grow"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What needs to be done?"
          autoFocus
        />
        <button 
          type="submit" 
          className="btn btn-primary flex items-center"
          disabled={!text.trim()}
        >
          <i className="bi bi-plus-lg mr-1"></i>
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
