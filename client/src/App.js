import "./App.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
// import Search from "./components/Search";
import BreedSearch from "./components/BreedSearch";
import SearchResults from "./components/SearchResults";

import { useState } from "react";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [current, setCurrent] = useState("About");
  return (
    <>
      <ApolloProvider client={client}>
        <section style={{ backgroundColor: "blue" }}>
          <SearchResults  id="results"/>
        </section>
      </ApolloProvider>
    </>
  );
}

export default App;
