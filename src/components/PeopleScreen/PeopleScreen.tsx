import {ListItem} from 'components/common/ListItem';
import {StatusBar} from 'expo-status-bar';
import {usePeople} from 'hooks/usePeople';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function PeopleScreen() {
  const {data, isLoading, isError, error} = usePeople();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (isError) {
    console.error(error);
    return (
      <View style={styles.container}>
        <Text>An error has occurred</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data?.results}
        renderItem={({item}) => (
          <ListItem
            title={item.name}
            subtitle={[item.gender, item.birth_year].join(', ')}
            onPress={() => {
              console.log(item.name);
            }}
          />
        )}
        keyExtractor={item => item.url}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
