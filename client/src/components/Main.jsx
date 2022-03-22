import React from "react";
import moment from "moment";
import { GET_TODOS } from "../graphql/Query";
import { useQuery } from "@apollo/client";

export const Main = () => {
    const { error, loading, data } = useQuery(GET_TODOS);
    console.log(data);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <main className="container todobox">
            <form>
                <aside className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Title"
                    />
                </aside>
                <aside className="form-group">
                    <label htmlFor="title">Detail</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Detail"
                    />
                </aside>
                <aside className="form-group">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        className="form-control"
                        placeholder="Enter Detail"
                    />
                </aside>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Submit
                </button>
            </form>

            <section className="list-group mt-4">
                {data?.fetchAll.map((todo) => (
                    <main key={todo._id}>
                        <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                            <aside key={todo._id} className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{todo.title}</h5>
                                <small>{moment(todo.date).format("MMMM DD YYYY")}</small>
                            </aside>
                            <p className="mb-1">{todo.detail}</p>
                            <small>And some small print.</small>
                        </a>
                    </main>
                ))}
            </section>
        </main>
    );
};





