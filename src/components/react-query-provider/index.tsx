'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';
import React from "react";

export function ReactQueryProvider(props: { children: React.ReactNode }) {
    const [queryClient] = React.useState(
      () =>
        new QueryClient({
          defaultOptions: {
            queries: {
              staleTime: 5 * 1000,
            },
          },
        }),
    )
  
    return (
      <QueryClientProvider client={queryClient}>
        <ReactQueryStreamedHydration>
          {props.children}
        </ReactQueryStreamedHydration>
      </QueryClientProvider>
    )
  }