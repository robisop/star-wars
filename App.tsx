import {AppNavigation} from 'components/common/AppNavigation';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {queries: {staleTime: Infinity}},
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigation />
    </QueryClientProvider>
  );
}
