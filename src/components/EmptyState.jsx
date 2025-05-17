import React from 'react';

function EmptyState({ addTodo }) {
  const addSampleTasks = () => {
    const sampleTasks = [
      'Complete project proposal',
      'Schedule team meeting',
      'Go for a 30-minute walk',
      'Read a chapter of my book'
    ];
    
    sampleTasks.forEach(task => {
      addTodo(task);
    });
  };
  
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <i className="bi bi-clipboard-check text-6xl text-gray-300 dark:text-gray-600 mb-4"></i>
      <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">No tasks yet</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        Add your first task using the form above or click below to add some sample tasks to get started.
      </p>
      <button 
        onClick={addSampleTasks}
        className="btn btn-secondary"
      >
        <i className="bi bi-lightning-charge mr-1"></i>
        Add Sample Tasks
      </button>
    </div>
  );
}

export default EmptyState;
