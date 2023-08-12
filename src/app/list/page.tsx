'use client'
import { useState } from 'react';
import RecruitmentCard from '../components/requritment-card';
import { Recruitment } from '../types/recruitment';
import Header from '../components/header';
import Link from 'next/link';

const ListPage: React.FC = () => {
  const [recruitments, setRecruitments] = useState<Recruitment[]>([
    {
      id: 1,
      user_id: 1,
      group_id: 1,
      name: '青春18きっぷ',
      imageUrl: 'https://www.nta.co.jp/media/tripa/static_contents/nta-tripa/item_images/images/000/090/546/medium/5b1d8706-8af1-40db-8dec-3660b21afe08.jpg?1563853348',
      description: '青春18きっぷ、1枚です。',
      price: 2000,
      max_member: 5,
      deadline: new Date(Date.now() + 1000000),
    },
    {
      id: 1,
      user_id: 1,
      group_id: 1,
      name: 'マスカルポーネロール',
      imageUrl: 'https://p.limia.jp/resize/o2/images/37/gallery/5/f3eea378d9047fba4b41a68dcd7c7ca3.jpg',
      description: 'コストコのパンです。消費期限は3日です。',
      price: 25,
      max_member: 5,
      deadline: new Date(Date.now()),
    },
    {
      id: 1,
      user_id: 1,
      group_id: 1,
      name: 'キッチンペーパー',
      imageUrl: 'https://tokubai-news-photo-production.tokubai.co.jp/c/f=jpg,u=0,w=1400/3c8a/861d/1864/f72f/2105/d105/c093/a767/e0eda5fe0b61eebd.jpg',
      description: 'Kirkland Signature のキッチンペーパーです。',
      price: 250,
      max_member: 5,
      deadline: null,
    },
  ]);

  const handleAddRecruitment = (recruitment: Recruitment) => {
    // In a real-world scenario, you might want to post the new recruitment to an API here.

    const newRecruitment: Recruitment = {
      ...recruitment,
      id: Math.max(...recruitments.map(p => p.id), 0) + 1 // Auto-generate a new ID. This is just for demo purposes.
    };

    setRecruitments([...recruitments, newRecruitment]);
  };

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="rounded-md dark:bg-gray-900 min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-3xl font-bold mb-4 dark:text-white">募集一覧</h1>
              <Link legacyBehavior href="/add-recruitment">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  募集を追加
                </a>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {recruitments.map(recruitment => (
                <RecruitmentCard key={recruitment.id} recruitment={recruitment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListPage;
