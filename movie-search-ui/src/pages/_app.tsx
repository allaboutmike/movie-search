import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from 'src/components/Layout/Layout';
import ErrorBoundary from 'src/components/ErrorBoundary/ErrorBoundary';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <ErrorBoundary fallback={<div>The system is down!</div>}>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
