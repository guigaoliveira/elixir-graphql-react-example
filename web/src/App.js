import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { createClient } from "./util/apollo";
import Users from "./components/Users";

function App() {
  const client = createClient();

  return (
    <ApolloProvider client={client}>
      <Users />
    </ApolloProvider>
  );
}

export default App;
