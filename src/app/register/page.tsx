'use client'

import React from 'react'
import { useRouter } from 'next/navigation'

const Register: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <header className="bg-blue-500 p-4 text-white shadow-md">
        <div className="container mx-auto">
          <h1 className="text-2xl font-semibold">グルバイ</h1>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="flex items-center justify-center h-screen bg-gray-200">
          <div className="p-8 bg-white shadow-md rounded-md">
            <h2 className="text-2xl mb-4">登録</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm mb-2">ユーザー名</label>
                <input type="text" className="p-2 w-full border rounded-md" placeholder="ユーザー名" />
              </div>
              {/* <div className="mb-4">
            <label className="block text-sm mb-2">メールアドレス</label>
            <input type="email" className="p-2 w-full border rounded-md" placeholder="メールアドレス" />
          </div> */}
              <div className="mb-4">
                <label className="block text-sm mb-2">パスワード</label>
                <input type="password" className="p-2 w-full border rounded-md" placeholder="パスワード" />
              </div>
              <button
                onClick={() => router.push('/list')}
                type="submit" className="p-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600">
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
