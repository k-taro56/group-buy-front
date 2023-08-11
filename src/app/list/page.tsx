import React from 'react';
import RecruitmentCard from '../components/requritment-card';
import { Recruitment } from '../types/recruitment';
import Header from '../components/header';

const recruitments: Recruitment[] = [
  {
    id: 1,
    user_id: 1,
    group_id: 1,
    name: 'サンプル募集1',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'この募集はサンプルです。',
    price: 1000,
    max_member: 5,
    deadline: new Date(Date.now() + 1000000),
  },
  {
    id: 1,
    user_id: 1,
    group_id: 1,
    name: 'サンプル募集2',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'この募集はサンプルです。',
    price: 1000,
    max_member: 5,
    deadline: new Date(Date.now()),
  },
  {
    id: 1,
    user_id: 1,
    group_id: 1,
    name: 'サンプル募集3',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'この募集はサンプルです。',
    price: 1000,
    max_member: 5,
    deadline: null,
  },
  {
    id: 1,
    user_id: 1,
    group_id: 1,
    name: 'サンプル募集4',
    imageUrl: 'https://via.placeholder.com/150',
    description: 'この募集はサンプルです。',
    price: 1000,
    max_member: 5,
    deadline: null,
  },
];

const ListPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">募集一覧</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recruitments.map((recruitment) => (
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
