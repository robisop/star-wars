import {act, render, screen, fireEvent} from '@testing-library/react-native';
import {View} from 'react-native';

import {AppNavigation} from './AppNavigation';

const MockView = ({testID}: {testID: string}) => <View testID={testID} />;

jest.mock('components/screens/PeopleScreen', () => () => {
  return <MockView testID="PeopleScreen" />;
});

jest.mock('components/screens/PlanetsScreen', () => () => {
  return <MockView testID="PlanetsScreen" />;
});

jest.mock('components/screens/StarshipsScreen', () => () => {
  return <MockView testID="StarshipsScreen" />;
});

describe('<AppNavigation />', () => {
  it('renders correctly', () => {
    render(<AppNavigation />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('navigates to People screen', () => {
    const {getByTestId} = render(<AppNavigation />);
    act(() => {
      fireEvent.press(getByTestId('PeopleTab'));
    });
    expect(screen.queryByTestId('PeopleScreen')).toBeTruthy();
    expect(screen.queryByTestId('PlanetsScreen')).toBeNull();
    expect(screen.queryByTestId('StarshipsScreen')).toBeNull();
  });

  it('navigates to Planets screen', () => {
    const {getByTestId} = render(<AppNavigation />);
    act(() => {
      fireEvent.press(getByTestId('PlanetsTab'));
    });
    expect(screen.queryByTestId('PeopleScreen')).toBeNull();
    expect(screen.queryByTestId('PlanetsScreen')).toBeTruthy();
    expect(screen.queryByTestId('StarshipsScreen')).toBeNull();
  });

  it('navigates to Starships screen', () => {
    const {getByTestId} = render(<AppNavigation />);
    act(() => {
      fireEvent.press(getByTestId('StarshipsTab'));
    });
    expect(screen.queryByTestId('PeopleScreen')).toBeNull();
    expect(screen.queryByTestId('PlanetsScreen')).toBeNull();
    expect(screen.queryByTestId('StarshipsScreen')).toBeTruthy();
  });
});
