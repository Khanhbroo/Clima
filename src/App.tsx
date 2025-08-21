import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@/context/theme-provider";
import Layout from "@/components/layout";
import WeatherDashboard from "@/pages/weather-dashboard";
import CityPage from "@/pages/city-page";
import "./App.css";
import { Toaster } from "sonner";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: (
          <Layout>
            <WeatherDashboard />
          </Layout>
        ),
      },
      {
        path: "city/:cityName",
        element: (
          <Layout>
            <CityPage />
          </Layout>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={client}>
      <ThemeProvider defaultTheme="dark">
        <RouterProvider router={router} />
        <Toaster richColors />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
