import { gql } from "apollo-server-core";

export const mainTypeDef = gql`
    extend type Query {
        books: [Book],
        book(id: String): Book
    }
`;