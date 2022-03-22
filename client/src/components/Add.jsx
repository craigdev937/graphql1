import React from "react";

export const Add = () => {
    return (
        <main className="">
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
        </main>
    );
};



