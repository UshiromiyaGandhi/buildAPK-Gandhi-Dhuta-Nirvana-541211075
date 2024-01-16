import { View, Text, Image } from 'react-native';

export default AboutMe = () => {
  return (
    <View
      style={{
        borderColor: '#FFFFFF44',
        borderWidth: 1,
        paddingHorizontal: 12,
        paddingTop: 16,
        paddingBottom: 24,
        gap: 8,
        marginVertical: 4,
        backgroundColor: '#00000099',
      }}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <Image
          style={{
            height: 150,
            width: 200,
          }}
          source={require('../../assets/20231014_101607.jpg')}
          resizeMode="stretch"
        />
      </View>
      <Text
        style={{
          color: 'white',
          fontFamily: 'Lato-Light',
          marginRight: 24,
          marginVertical: 12,
          fontSize: 22,
        }}>
        Nama saya Gandhi Dhuta Nirvana. Saya adalah seseorang yang tertarik di
        bidang komputer.
      </Text>
    </View>
  );
};
