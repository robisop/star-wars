import {mockSwapiPeople} from 'api/swapiPeople';
import renderer from 'react-test-renderer';

import PeopleScreen from './PeopleScreen';

jest.mock('hooks/usePeople', () => ({
  usePeople: jest.fn(() => ({
    data: {
      pages: [
        jest.requireActual('api/swapiPeople').parseSwapiPeople(mockSwapiPeople),
      ],
    },
    isLoading: false,
    isError: false,
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isFetchingNextPage: false,
  })),
}));

describe('<PeopleScreen />', () => {
  it('renders correctly', () => {
    const component = renderer.create(<PeopleScreen />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
