import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface ListItemProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export const ListItem = ({title, subtitle, onPress}: ListItemProps) => {
  return (
    <TouchableOpacity onPress={() => onPress()} accessibilityRole="button">
      <View style={styles.item}>
        <View style={styles.firstRow}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.secondRow}>
          <Text>{subtitle}</Text>
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
