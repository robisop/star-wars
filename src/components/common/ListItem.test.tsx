import {render, screen} from '@testing-library/react-native';

import {ListItem} from './ListItem';

describe('<ListItem />', () => {
  it('renders props correctly', () => {
    render(<ListItem title={'test title'} subtitle={'test subtitle'} />);
    expect(screen.getByText('test title')).toBeDefined();
    expect(screen.getByText('test subtitle')).toBeDefined();
  });
});
