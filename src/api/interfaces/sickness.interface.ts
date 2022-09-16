export interface Sickness {
    id: number;
    name: string;
    userId: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}