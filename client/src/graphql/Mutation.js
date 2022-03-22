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



