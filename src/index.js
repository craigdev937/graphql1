import mongoose from "mongoose";
import { config } from "./config/keys.js";
import { ApolloServer } from "apollo-server";
import { typeDefs } from "./graphql/schema.js";
import { resolvers } from "./graphql/resolvers.js";

(async () => {
    await mongoose.connect(config.MONGO_URI)
    .then(() => console.log("MongoDB is now Connected!"))
    .catch((error) => console.log(error));

    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    const port = process.env.PORT || 9000;
    apolloServer.listen(port, () => {
        console.log(`Server: http://localhost:${port}`);
        console.log("Press Ctrl + C to exit.");
    })
})();



