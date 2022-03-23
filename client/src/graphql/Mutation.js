import { gql } from "@apollo/client";

export const ADD_TODO = gql`
    mutation CreateTodo($title: String!, 
            $detail: String!,
            $date: Date!){
        create (input: {
            title: $title,
            detail: $detail,
            date: $date
        }) {
            _id
            title
            detail
            date
        }
    }
`;

export const DELETE_TODO = gql`
    mutation Delete($_id: ID!) {
        deleteTodo(_id: $_id) {
            _id
            title
            detail
            date
        }
    }
`;





