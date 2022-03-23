import { gql } from "apollo-server-express";

export const typeDefs = gql`
    scalar Date
    type Todo {
        _id: ID!
        title: String
        detail: String
        date: Date
    }

    input TodoInput {
        title: String!
        detail: String!
        date: Date!
    }

    type Query {
        getOne(_id: ID): Todo
        fetchAll: [Todo]
    }

    type Mutation {
        create (input: TodoInput): Todo
        update(_id: ID!, input: TodoInput): Todo
        deleteTodo(_id: ID!): Todo
    }
`;


