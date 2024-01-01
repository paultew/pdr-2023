export type User = {
    id: string,
    username: string,
    email: string
};

export const users: User[] = [
    {
        id: '1',
        username: 'user1',
        email: 'user1@test.dev'
    },
    {
        id: '2',
        username: 'user2',
        email: 'user2@test.dev'
    }
];