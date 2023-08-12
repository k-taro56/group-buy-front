'use client'
import { useRouter } from 'next/navigation';
import AddRecruitmentForm from '../components/add-recruitment-form';
import { Recruitment } from '../types/recruitment';
import Header from '../components/header';

const AddRecruitmentPage: React.FC = () => {
    const router = useRouter();

    const handleAddRecruitment = (recruitment: Recruitment) => {
        // In a real-world scenario, you might want to post the new recruitment to an API here.
        // After adding the recruitment, you can redirect the user to the main page.

        // For demonstration purposes, just redirecting back to the main page without actual API call.
        router.push('/');
    };

    return (
        <div>
          <Header />
          <main className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">新しい募集を追加</h1>
            <AddRecruitmentForm onAdd={handleAddRecruitment} />
            </main>
        </div>
    );
};

export default AddRecruitmentPage;
