import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import App from './components/App';

const queryClient = new QueryClient();
const container = document.getElementById('root')!;
const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    <ReactQueryDevtools initialIsOpen />
  </QueryClientProvider>
  </React.StrictMode>
);
