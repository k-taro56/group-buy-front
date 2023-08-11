'use client'

import React, { useState, useEffect } from 'react';
import { Recruitment } from '../types/recruitment';
import { getCountdown } from '../helpers/countdown';

type RecruitmentCardProps = {
  recruitment: Recruitment;
};

const RecruitmentCard: React.FC<RecruitmentCardProps> = ({ recruitment }) => {
  const [countdown, setCountdown] = useState<string | null>(null);
  const [isExpired, setIsExpired] = useState<boolean>(false);

  useEffect(() => {
    const deadline = recruitment.deadline;
    if (deadline) {
      const interval = setInterval(() => {
        const timeLeft = getCountdown(deadline);
        setCountdown(timeLeft);

        if (timeLeft === "00:00:00") {
          setIsExpired(true);
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [recruitment.deadline]);

  return (
    <div className="border p-4 m-4 max-w-sm rounded-md">
      <img className="w-full h-64 object-cover mb-4" src={recruitment.imageUrl} alt={recruitment.name} />
      <h2 className="text-lg font-bold mb-2">{recruitment.name}</h2>
      <p className="mb-4">{recruitment.description}</p>
      {countdown && (
        <div className="text-red-500 mb-4 font-bold">
          募集終了まで: {countdown}
        </div>
      )}
     <div className="flex justify-between items-center">
        <span className="font-bold text-xl">￥{recruitment.price.toLocaleString()}</span>
        <button
          className={`${
            isExpired ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700'
          } text-white font-bold py-2 px-4 rounded`}
          disabled={isExpired}
        >
          {isExpired ? '終了' : 'カートに追加'}
        </button>
      </div>
    </div>
  );
};

export default RecruitmentCard;
