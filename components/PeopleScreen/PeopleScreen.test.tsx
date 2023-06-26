import {render} from '@testing-library/react-native';
import renderer, {ReactTestRendererJSON} from 'react-test-renderer';

import PeopleScreen from './PeopleScreen';

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
