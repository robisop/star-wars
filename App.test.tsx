import {render} from '@testing-library/react-native';
import renderer, {ReactTestRendererJSON} from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<App />).toJSON() as ReactTestRendererJSON;
    expect(tree.children?.length).toBe(1);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders Hello World message on the home page', async () => {
    const screen = render(<App />);
    expect(screen.getByText('Hello, World!')).toBeDefined();
  });
});
