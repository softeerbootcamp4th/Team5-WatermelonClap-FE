import { Button } from "@mui/material";
import {
  QueryErrorResetBoundary,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
export const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>

      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ resetErrorBoundary }) => (
              <h1>
                There was an error.{" "}
                <Button variant="contained" onClick={resetErrorBoundary}>
                  Try again
                </Button>
              </h1>
            )}
          >
            <Suspense fallback={<h1>Loading...</h1>}>
              <AsyncComponent />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </div>
  );
};

const AsyncComponent = () => {
  const { data } = useSuspenseQuery({
    queryKey: ["some-query-key"],
    queryFn: async (): Promise<string> => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (Math.random() > 0.5) {
            reject(new Error("some-error"));
          }
          resolve("some-data");
        }, 1000);
      });
    },
    retry: 0,
  });

  return <h1>data loaded: {data}</h1>;
};
