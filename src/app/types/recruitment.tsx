export type Recruitment = {
    id: number;
    user_id: number;
    group_id: number | null;
    name: string;
    imageUrl: string;
    description: string;
    max_member: number | null;
    price: number;
    deadline: Date | null;
  };
