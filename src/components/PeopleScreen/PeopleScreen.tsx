import {StatusBar} from 'expo-status-bar';
import {usePeople} from 'hooks/usePeople';
import {StyleSheet, Text, View} from 'react-native';

export default function PeopleScreen() {
  const {data, isLoading, isError} = usePeople();

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

  console.log(data);

  return (
    <View style={styles.container}>
      <Text>People!</Text>
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
