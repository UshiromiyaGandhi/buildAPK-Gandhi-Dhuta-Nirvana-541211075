import {Text, View} from 'react-native';

export default function SectionTitle(props) {
  return (
    <View>
      <Text
        style={{
          fontFamily: 'Lato-Light',
          color: '#FFFFFF',
          fontSize: 34,
          marginVertical:8
        }}>
        {props.content}
      </Text>
    </View>
  );
}
