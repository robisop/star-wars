import {mockSwapiStarships} from 'api/swapiStarships';
import renderer from 'react-test-renderer';

import StarshipsScreen from './StarshipsScreen';

jest.mock('hooks/useStarships', () => ({
  useStarships: jest.fn(() => ({
    data: {
      pages: [
        jest
          .requireActual('api/swapiStarships')
          .parseSwapiStarships(mockSwapiStarships),
      ],
    },
    isLoading: false,
    isError: false,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
  })),
}));

describe('<StarshipsScreen />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<StarshipsScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
