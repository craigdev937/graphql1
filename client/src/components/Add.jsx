import React from "react";
import moment from "moment";
import { useMutation } from "@apollo/client";
import { GET_TODOS } from "../graphql/Query";
import { ADD_TODO } from "../graphql/Mutation";

const initialState = {
    title: "", detail: "", date: ""
};

export const Add = () => {
    const [todo, setTodo] = React.useState(initialState);
    const [create] = useMutation(ADD_TODO);

    const handleChange = (event) => {
        setTodo({...todo, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        create({
            variables: {
                title: todo.title,
                detail: todo.detail,
                date: todo.date
            }, 
            refetchQueries: [{ query: GET_TODOS }]
        })
    };

    return (
        <main className="">
            <form onSubmit={handleSubmit}>
                <aside className="form-group">
                    <label htmlFor="title">Title</label>
                    <pre>{JSON.stringify(todo, null, "\t")}</pre>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                        name="title"
                        value={todo.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside className="form-group">
                    <label htmlFor="title">Detail</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Detail"
                        name="detail"
                        value={todo.detail}
                        onChange={handleChange}
                    />
                </aside>
                <aside className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        value={moment(todo.date).format("YYYY-MM-DD")}
                        onChange={handleChange}
                    />
                </aside>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit
                </button>
            </form>
        </main>
    );
};



