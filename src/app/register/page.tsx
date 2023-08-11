'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Register: React.FC = () => {
  const router = useRouter();
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
    <div>
      <header className="bg-blue-500 dark:bg-blue-700 p-4 text-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-semibold">グルバイ</h1>
          <button onClick={toggleDarkMode}>テーマ切り替え</button>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="rounded-md flex items-center justify-center h-screen bg-gray-200 dark:bg-gray-800">
          <div className="p-8 bg-white dark:bg-gray-700 dark:text-gray-200 shadow-md rounded-md">
            <h2 className="text-2xl mb-4">登録</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2 text-black dark:text-gray-400">ユーザー名</label>
                <input
                  type="text"
                  className="p-2 w-full border border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300 rounded-md"
                  placeholder="ユーザー名"
                />
              </div>
              {/* <div className="mb-4">
            <label className="block text-sm mb-2">メールアドレス</label>
            <input type="email" className="p-2 w-full border rounded-md" placeholder="メールアドレス" />
          </div> */}
              <div className="mb-4">
                <label className="block text-sm mb-2">パスワード</label>
                <input type="password" className="p-2 w-full border border-gray-300 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300 rounded-md" placeholder="パスワード" />
              </div>
              <button
                onClick={() => router.push('/list')}
                type="submit" className="p-2 w-full bg-blue-500 text-white dark:bg-blue-600 rounded-md hover:bg-blue-600 dark:hover:opacity-90">
                登録する
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Register
