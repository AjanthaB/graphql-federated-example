import { gql } from "apollo-server-core";

export const bookTypeDef = gql`
    type Book @key(fields: "id") {
        id: ID!
        name: String!
        author: Author!
        
    }

    extend type Author @key(fields: "id") {
        id: ID! @external
    }
`;