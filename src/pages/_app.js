import { OrganizationProvider } from "@/components/context/organization provider/OrganizationProvider";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <OrganizationProvider>
        <Component {...pageProps} />
      </OrganizationProvider>
    </QueryClientProvider>
  );
}
