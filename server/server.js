import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//node server.js

const typeDefs = `#graphql
    type Query {
        greeting: String
    }
`;

const resolvers = {
    Query: {
        greeting: () => 'Shi'
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

const info = await startStandaloneServer(server, { listen: { port: 9000 } });

console.log(`Server running at ${info.url}`);