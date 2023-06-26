import {render} from '@testing-library/react-native';
import renderer, {ReactTestRendererJSON} from 'react-test-renderer';

import PeopleScreen from './PeopleScreen';

jest.mock('hooks/usePeople', () => ({
  usePeople: jest.fn(() => ({
    data: [
      'Luke Skywalker',
      'C-3PO',
      'R2-D2',
      'Darth Vader',
      'Leia Organa',
      'Owen Lars',
      'Beru Whitesun lars',
      'R5-D4',
      'Biggs Darklighter',
      'Obi-Wan Kenobi',
    ],
    isLoading: false,
    isError: false,
  })),
}));

describe('<PeopleScreen />', () => {
  it('has 1 child', () => {
    const tree = renderer
      .create(<PeopleScreen />)
      .toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<PeopleScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Hello World message on the home page', async () => {
    const screen = render(<PeopleScreen />);
    expect(screen.getByText('People!')).toBeDefined();
  });
});
