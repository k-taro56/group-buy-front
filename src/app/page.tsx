'use client'

import { useRouter } from 'next/navigation'

const HomePage: React.FC = () => {
    const router = useRouter();

    return (
        <div>
            <header className="bg-blue-500 p-4 text-white shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold">グルバイ</h1>
                    <button
                        onClick={() => router.push('/login')}
                        className="bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded text-white font-medium">
                        ログイン
                    </button>
                </div>
            </header>
            <main className="container mx-auto p-4">
                <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-md w-full space-y-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">グルバイ</h2>
                        </div>
                        <div className="mt-4 flex items-center justify-center">
                            <button
                                onClick={() => router.push('/register')}
                                className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                今すぐ登録
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="text-sm text-gray-600">
                                説明
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomePage;
