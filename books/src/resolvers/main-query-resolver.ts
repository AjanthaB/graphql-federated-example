import { BookResolver, _books } from "./book-resolver";

export const mainQueryResolver = {
    Query: {
        ...BookResolver
    },
    Book: {
        author: (book: any) => {
            return {__typename: 'Author', id: book.author}
        }
    }
}
