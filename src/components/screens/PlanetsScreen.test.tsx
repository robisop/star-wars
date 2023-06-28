import {mockSwapiPlanets} from 'api/swapiPlanets';
import renderer from 'react-test-renderer';

import PlanetsScreen from './PlanetsScreen';

jest.mock('hooks/usePlanets', () => ({
  usePlanets: jest.fn(() => ({
    data: {
      pages: [
        jest
          .requireActual('api/swapiPlanets')
          .parseSwapiPlanets(mockSwapiPlanets),
      ],
    },
    isLoading: false,
    isError: false,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
  })),
}));

describe('<PlanetsScreen />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<PlanetsScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
