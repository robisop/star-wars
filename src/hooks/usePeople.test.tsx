import {renderHook} from '@testing-library/react-hooks';
import {mockSwapiPeople, parseSwapiPeople} from 'api/swapiPeople';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query';

import {usePeople} from './usePeople';

const queryClient = new QueryClient({
  defaultOptions: {queries: {staleTime: Infinity, cacheTime: 0}},
});

const hookWrapper = ({children}: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('usePeople', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockSwapiPeople),
      } as any),
    );
  });

  it('returns correctly parsed people data', async () => {
    const {result, waitForNextUpdate} = renderHook(() => usePeople(), {
      wrapper: hookWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.pages[0]).toEqual(
      parseSwapiPeople(mockSwapiPeople),
    );
  });
});
