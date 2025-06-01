export interface Pet {
  id: string;
  name: string;
  breed: string;
  age?: string;
  description: string;
  imageUrl: string;
  status: 'available' | 'adopted' | 'pending';
  type: 'dog' | 'cat' | 'bird' | 'other';
  gender: 'male' | 'female';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  location?: string;
}

export interface PetFilterParams {
  type?: string;
  breed?: string;
  age?: string;
  gender?: string;
  size?: string;
  location?: string;
  goodWith?: string[];
  activityLevel?: string;
  featured?: boolean;
  limit?: number;
  page?: number;
}