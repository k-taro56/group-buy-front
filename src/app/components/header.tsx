'use client'
import React from 'react';

const Header: React.FC = () => {
  const userIconURL = "https://doodleipsum.com/50?bg=ddd&shape=circle&sat=-100";
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.setProperty('--foreground-rgb', '#000000');
        document.documentElement.style.setProperty('--background-start-rgb', '#d6dbdc');
        document.documentElement.style.setProperty('--background-end-rgb', '#ffffff');
    } else {
        document.documentElement.classList.add('dark');
        document.documentElement.style.setProperty('--foreground-rgb', '#ffffff');
        document.documentElement.style.setProperty('--background-start-rgb', '#000000');
        document.documentElement.style.setProperty('--background-end-rgb', '#0000000');
    }
  }

  return (
    <header className="bg-blue-500 dark:bg-blue-700 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">グルバイ</h1>
        <button onClick={toggleDarkMode}>テーマ切り替え</button>
        <img src={userIconURL} alt="User Icon" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
}

export default Header;
