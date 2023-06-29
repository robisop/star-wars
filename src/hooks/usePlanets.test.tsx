import {renderHook} from '@testing-library/react-hooks';
import {mockSwapiPlanets, parseSwapiPlanets} from 'api/swapiPlanets';
import {
  QueryClient,
  QueryClientProvider,
  QueryClientProviderProps,
} from 'react-query';

import {usePlanets} from './usePlanets';

const queryClient = new QueryClient({
  defaultOptions: {queries: {staleTime: Infinity, cacheTime: 0}},
});

const hookWrapper = ({children}: QueryClientProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('usePlanets', () => {
  beforeAll(() => {
    jest.spyOn(global, 'fetch').mockReturnValue(
      Promise.resolve({
        json: () => Promise.resolve(mockSwapiPlanets),
      } as any),
    );
  });

  it('returns correctly parsed planets data', async () => {
    const {result, waitForNextUpdate} = renderHook(() => usePlanets(), {
      wrapper: hookWrapper,
    });

    await waitForNextUpdate();

    expect(result.current.data?.pages[0]).toEqual(
      parseSwapiPlanets(mockSwapiPlanets),
    );
  });
});
