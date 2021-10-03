import { Context } from "apollo-server-core";

export const _authors = [
    {
        id: '100',
        name: 'J.K Rowling'
    },
    {
        id: '101',
        name: 'Marting Wikramasinghe'
    }
];

export const AuthorResolver = {
    authors: (parent: {}, args: {}, context: any): any => {
        return _authors;
    },
    author: (parent: {}, args: {id: string}, context: any): any => {
        return _authors.find(a => a.id == args.id);
    },
}
