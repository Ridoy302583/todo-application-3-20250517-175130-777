import React, { useState, useRef, useEffect } from 'react';

function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);
  const inputRef = useRef(null);
  
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);
  
  const handleEdit = () => {
    setIsEditing(true);
    setEditText(todo.text);
  };
  
  const handleSave = () => {
    if (editText.trim()) {
      editTodo(todo.id, editText);
      setIsEditing(false);
    }
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditText(todo.text);
    }
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };
  
  return (
    <div className={`task-item ${todo.completed ? 'completed' : ''}`}>
      <div className="flex-grow flex items-center">
        <button
          onClick={() => toggleTodo(todo.id)}
          className="mr-3 flex-shrink-0"
          aria-label={todo.completed ? "Mark as incomplete" : "Mark as complete"}
        >
          {todo.completed ? (
            <i className="bi bi-check-circle-fill text-primary-500 text-xl"></i>
          ) : (
            <i className="bi bi-circle text-gray-400 text-xl"></i>
          )}
        </button>
        
        {isEditing ? (
          <input
            ref={inputRef}
            type="text"
            className="input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div className="flex-grow">
            <p className={`text-lg ${todo.completed ? 'line-through text-gray-500 dark:text-gray-400' : ''}`}>
              {todo.text}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Added: {formatDate(todo.createdAt)}
            </p>
          </div>
        )}
      </div>
      
      <div className="flex space-x-1">
        {!isEditing && (
          <button
            onClick={handleEdit}
            className="p-2 text-gray-500 hover:text-primary-500 transition-colors"
            aria-label="Edit task"
          >
            <i className="bi bi-pencil"></i>
          </button>
        )}
        
        <button
          onClick={() => deleteTodo(todo.id)}
          className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          aria-label="Delete task"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
