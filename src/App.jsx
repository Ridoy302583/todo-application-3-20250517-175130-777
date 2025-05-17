import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Header from './components/Header';
import Footer from './components/Footer';
import EmptyState from './components/EmptyState';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTodos([...todos, newTodo]);
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;
  const completedTodosCount = todos.filter(todo => todo.completed).length;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
          <TodoForm addTodo={addTodo} />
          
          {todos.length > 0 ? (
            <>
              <div className="flex justify-between items-center mb-4 mt-8">
                <div className="flex space-x-2">
                  <button 
                    className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('all')}
                  >
                    All ({todos.length})
                  </button>
                  <button 
                    className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('active')}
                  >
                    Active ({activeTodosCount})
                  </button>
                  <button 
                    className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-secondary'}`}
                    onClick={() => setFilter('completed')}
                  >
                    Completed ({completedTodosCount})
                  </button>
                </div>
                
                {completedTodosCount > 0 && (
                  <button 
                    className="btn btn-danger"
                    onClick={clearCompleted}
                  >
                    Clear Completed
                  </button>
                )}
              </div>
              
              <TodoList 
                todos={filteredTodos} 
                toggleTodo={toggleTodo} 
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            </>
          ) : (
            <EmptyState addTodo={addTodo} />
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
