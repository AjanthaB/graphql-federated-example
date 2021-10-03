import { Context } from "apollo-server-core";

export const _books = [
    {
        id: '1111',
        name: 'Harry Potter, Half Blood Prince',
        author: '100'
    },
    {
        id: '2222',
        name: 'Madolduwa',
        author: '101'
    }
];

export const BookResolver = {
    books: (parent: {}, args: {}, context: any): any => {
        console.log('fetching books')
        return _books;
    },
    book: (parent: {}, args: {id: string}, context: any) => {
        return _books.find(b => b.id == args.id);
    }
}
