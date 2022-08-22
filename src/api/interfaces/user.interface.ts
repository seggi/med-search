export interface User {
    id: number
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    birthDate?: Date;
    createAt?: Date;
    updateAt?: Date;
    deleteAt?: Date;
}

