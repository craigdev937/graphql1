import React from "react";
import moment from "moment";

export const Todo = ({todo}) => {
    return (
        <section className="list-group mt-4">
            <aside key={todo._id}>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <aside key={todo._id} className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{todo.title}</h5>
                        <small>
                            {moment(todo.date).format("MMMM DD YYYY")}
                        </small>
                    </aside>
                    <p className="mb-1">{todo.detail}</p>
                    <small>And some small print.</small>
                </a>
            </aside>
        </section>
    );
};



