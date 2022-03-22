import React from "react";
import { GET_TODOS } from "../graphql/Query";
import { useQuery } from "@apollo/client";
import { Add } from "./Add";
import { Todo } from "./Todo";

export const Main = () => {
    const { error, loading, data } = useQuery(GET_TODOS);
    console.log(data);

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>{error.message}</h1>

    return (
        <main className="container todobox">
            <Add />
            <section className="list-group mt-4">
                {data?.fetchAll.map((todo) => (
                    <Todo key={todo._id} todo={todo} />
                ))}
            </section>
        </main>
    );
};





