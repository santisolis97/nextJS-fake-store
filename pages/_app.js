import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PageHeader } from '../components/PageHeader/PageHeader';

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <PageHeader />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
