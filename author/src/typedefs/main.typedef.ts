import { gql } from "apollo-server-core";

export const mainTypeDef = gql`
    extend type Query {
        authors: [Author]
        author(id: String): Author
    }
`;