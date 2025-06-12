const { GraphQLScalarType, Kind } = require("graphql");

//graphql def and shape of object
const typeDefs = `
#graphql 
    scalar Date
    type Message{
    _id: ID
    name: String
    email: String
    message: String
    postDate: Date
    }

     # Important for useQuery: We define our Query type to inform our entry points
    # The Query type is built-in to GraphQL, so we only need to extend it to include which kinds of information we plan to request in our application
    type Query{
        messages: [Message]!
    }
    
     # Important for useMutation: We define our Mutation type to inform our entrypoints
    type Mutation{
        addMessage(name: String!, email: String!, message: String!) : Message
    }
   `;

const dateScalar = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  serialize(value) {
    if (value instanceof Date) {
      return value.getTime(); // Convert outgoing Date to integer for JSON
    }
    throw Error("GraphQL Date Scalar serializer expected a `Date` object");
  },
  parseValue(value) {
    if (typeof value === "number") {
      return new Date(value); // Convert incoming integer to Date
    }
    throw new Error("GraphQL Date Scalar parser expected a `number`");
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      // Convert hard-coded AST string to integer and then to Date
      return new Date(parseInt(ast.value, 10));
    }
    // Invalid hard-coded value (not an integer)
    return null;
  },
});
module.exports = typeDefs;
