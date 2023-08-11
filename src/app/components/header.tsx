import React from 'react';

const userIconURL = "https://doodleipsum.com/50?bg=ddd&shape=circle&sat=-100";

const Header: React.FC = () => {
    return (
      <header className="bg-blue-500 dark:bg-blue-700 p-4 text-white shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-semibold">グルバイ</h1>
            <img src={userIconURL} alt="User Icon" className="w-8 h-8 rounded-full" />
          </div>
        </header>
      );
}

export default Header;
