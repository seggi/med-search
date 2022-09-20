export interface Medicine {
    id: number;
    name: string;
    description: string;
    posology: string;
    userId: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}