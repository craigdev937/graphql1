import { gql } from "@apollo/client";

export const GET_TODOS = gql`
    query GetAllTodos {
        fetchAll {
            _id
            title
            detail
            date
        }
    }
`;



