import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import App from "./App";

const Mikrofrontend = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  );
};

export default Mikrofrontend;
