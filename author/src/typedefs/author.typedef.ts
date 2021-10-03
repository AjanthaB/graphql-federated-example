import { gql } from "apollo-server-core";

export const AuthorTypeDef = gql`
    type Author @key(fields: "id") {
        id: ID!
        name: String
    }
`;
