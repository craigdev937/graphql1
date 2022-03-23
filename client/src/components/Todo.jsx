import React from "react";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { GET_TODOS } from "../graphql/Query";
import { DELETE_TODO } from "../graphql/Mutation";

export const Todo = ({todo}) => {
    const [deleteTodo] = useMutation(DELETE_TODO);
    const removeTodo = (_id) => {
        deleteTodo({
            variables: { _id: _id },
            refetchQueries: [{ query: GET_TODOS }]
        })
    };

    return (
        <section className="list-group mt-4">
            <aside key={todo._id}>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <aside key={todo._id} className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{todo.title}</h5>
                        <small>
                            {moment(todo.date).format("YYYY-MM-DD")}
                        </small>
                    </aside>
                    <p className="mb-1">{todo.detail}</p>
                    <small onClick={() => removeTodo(todo._id)}>Delete</small>
                </a>
            </aside>
        </section>
    );
};



