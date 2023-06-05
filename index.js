
import {Dimensions, FlatList, View} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const numColumns = 2;
const gap = 5;

const availableSpace = screenWidth - (numColumns - 1) * gap;
const itemSize = availableSpace / numColumns;

const renderItem = ({item}) => {
  return (
    <View
      style={{
        height: itemSize,
        width: itemSize,
        backgroundColor: 'pink',
      }}
    />
  );
};

const RNTesterApp = props => {
  return (
    <FlatList
      renderItem={renderItem}
      data={new Array(100).fill(0)}
      numColumns={numColumns}
      contentContainerStyle={{gap}}
      columnWrapperStyle={{gap}}
      key={numColumns}
    />
  );
};
