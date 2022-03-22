import React from "react";
import "./App.css";
import { ApolloProvider, ApolloClient, 
    InMemoryCache } from "@apollo/client";
import { Main } from "../components/Main";

const GClient = new ApolloClient({
    uri: "http://localhost:9000/graphql",
    cache: new InMemoryCache()
});

export const App = () => {
    return (
        <React.Fragment>
            <ApolloProvider client={GClient}>
                <Main />
            </ApolloProvider>
        </React.Fragment>
    );
};




