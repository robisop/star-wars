import {ListItemData} from 'api/common';
import {ListItem} from 'components/common/ListItem';
import {StatusBar} from 'expo-status-bar';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ListViewProps {
  data: ListItemData[] | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  isError: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const ListView = ({
  data,
  hasNextPage,
  isLoading,
  isError,
  isFetchingNextPage,
  fetchNextPage,
}: ListViewProps) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.container}>
        <Text>An error has occurred</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const renderFooter = () => (
    <View style={styles.listFooter}>
      {hasNextPage && isFetchingNextPage && (
        <ActivityIndicator testID="activityIndicator" />
      )}
    </View>
  );

  const renderEmpty = () => (
    <View style={styles.listEmpty}>
      <Text>No data</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        testID="flatList"
        data={data}
        renderItem={({item}) => (
          <ListItem title={item.title} subtitle={item.subtitle} />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        onEndReachedThreshold={0.5}
        onEndReached={() => (hasNextPage ? fetchNextPage() : undefined)}
      />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listFooter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listEmpty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
