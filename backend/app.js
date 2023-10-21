import { ApolloServer } from "@apollo/server";
import cors from 'cors';
import bodyParser from "body-parser";
import express from 'express';
import { config } from "dotenv";
import { startStandaloneServer } from "@apollo/server/standalone";


const port = process.env.PORT;

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const { url } = await startStandaloneServer(server, {
    listen:{ port}
});

console.log(`🚀  Server ready at: ${url}`);