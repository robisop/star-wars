import {render, screen, fireEvent} from '@testing-library/react-native';

import {ListView} from './ListView';

const baseProps = {
  data: [
    {
      id: '1',
      title: 'test title',
      subtitle: 'test subtitle',
    },
    {
      id: '2',
      title: 'test title 2',
      subtitle: 'test subtitle 2',
    },
  ],
  hasNextPage: false,
  isLoading: false,
  isError: false,
  isFetchingNextPage: false,
  fetchNextPage: jest.fn(),
};

const scrollEventData = {
  nativeEvent: {
    contentOffset: {
      y: 500,
    },
    contentSize: {
      // Dimensions of the scrollable content
      height: 500,
      width: 100,
    },
    layoutMeasurement: {
      // Dimensions of the device
      height: 100,
      width: 100,
    },
  },
};

describe('<ListView />', () => {
  it('renders empty list correctly', () => {
    const props = {
      ...baseProps,
      data: [],
    };

    render(<ListView {...props} />);
    expect(screen.getByText('No data')).toBeDefined();
  });

  it('renders loading state correctly', () => {
    const props = {
      ...baseProps,
      isLoading: true,
    };

    render(<ListView {...props} />);
    expect(screen.getByText('Loading...')).toBeDefined();
  });

  it('renders error state correctly', () => {
    const props = {
      ...baseProps,
      isError: true,
    };

    render(<ListView {...props} />);
    expect(screen.getByText('An error has occurred')).toBeDefined();
  });

  it('renders data correctly', () => {
    render(<ListView {...baseProps} />);
    expect(screen.toJSON()).toMatchSnapshot();
  });

  it('renders fetching state correctly', () => {
    const props = {
      ...baseProps,
      hasNextPage: true,
      isFetchingNextPage: true,
    };

    render(<ListView {...props} />);
    expect(screen.getByTestId('activityIndicator')).toBeDefined();
  });

  it('calls fetchNextPage when scrolled to the end of list and hasNextPage is true', () => {
    const props = {
      ...baseProps,
      hasNextPage: true,
      fetchNextPage: jest.fn(),
    };

    render(<ListView {...props} />);
    fireEvent.scroll(screen.getByTestId('flatList'), scrollEventData);
    expect(props.fetchNextPage).toHaveBeenCalled();
  });

  it('does not call fetchNextPage when scrolled to the end of list and hasNextPage is false', () => {
    const props = {
      ...baseProps,
      hasNextPage: false,
      fetchNextPage: jest.fn(),
    };

    render(<ListView {...props} />);
    fireEvent.scroll(screen.getByTestId('flatList'), scrollEventData);
    expect(props.fetchNextPage).not.toHaveBeenCalled();
  });
});
