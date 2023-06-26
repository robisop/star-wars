import {SwapiPerson} from 'api/swapiPeople';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface ListItemProps {
  item: SwapiPerson;
  onPress: (item: SwapiPerson) => void;
}

export const ListItem = ({item, onPress}: ListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} accessibilityRole="button">
      <View style={styles.item}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={styles.secondRow}>
          <Text>{[item.gender, item.birth_year].join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    minWidth: '100%',
    paddingRight: 10,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 10,
  },
  firstRow: {
    marginTop: 5,
    marginBottom: 5,
  },
  secondRow: {
    marginBottom: 10,
  },
  title: {fontWeight: 'bold'},
});
