import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { ThemeProvider } from "@/components/context/theme-provider";
import Layout from "@/components/layout";
import WeatherDashboard from "@/pages/weather-dashboard";
import CityPage from "@/pages/city-page";
import "./App.css";

const client = new QueryClient();

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
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
