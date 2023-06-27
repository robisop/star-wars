import {Text, View, StyleSheet} from 'react-native';

interface ListItemProps {
  title: string;
  subtitle: string;
}

export const ListItem = ({title, subtitle}: ListItemProps) => {
  return (
    <View style={styles.item}>
      <View style={styles.firstRow}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.secondRow}>
        <Text>{subtitle}</Text>
      </View>
    </View>
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
