'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'

const LoginPage: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここにログインロジック
    console.log('Email:', email, 'Password:', password);
  };

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
        <div className="rounded-md min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-100">ログイン</h2>
            </div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm space-y-4">
                <div>
                  <label htmlFor="email-address" className="sr-only">メールアドレス</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email" autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">パスワード</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 dark:border-gray-700 dark:placeholder-gray-400 dark:bg-gray-800 dark:text-gray-100 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="パスワード"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded dark:border-gray-700 dark:bg-gray-800"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900 dark:text-gray-400">
                    ログイン状態を保持する
                  </label>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setTimeout(() => router.push('/list'), 1500)}
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  ログイン
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
