import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          TaskMaster - Organize your life with ease
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
          &copy; {currentYear} Designed by WebSparks AI
        </p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
            <i className="bi bi-github text-xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
            <i className="bi bi-twitter text-xl"></i>
          </a>
          <a href="#" className="text-gray-500 hover:text-primary-500 transition-colors">
            <i className="bi bi-linkedin text-xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
