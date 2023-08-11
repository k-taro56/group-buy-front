'use client'

import { useRouter } from 'next/navigation'

const HomePage: React.FC = () => {
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
                    <button
                        onClick={() => router.push('/login')}
                        className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-900 dark:hover:bg-blue-1000 px-4 py-2 rounded text-white font-medium mr-4">
                        ログイン
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <div className="rounded-md min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-100">グルバイ</h2>
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                            <button
                                onClick={() => router.push('/register')}
                                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                今すぐ登録
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                共同で買い物をしたい時に人を集めるアプリ<br />コストコで大きなものをみんなでかってシェアをする人を集めたり、青春18きっぷで一緒に移動をしてくれる人を集めるアプリです。
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
