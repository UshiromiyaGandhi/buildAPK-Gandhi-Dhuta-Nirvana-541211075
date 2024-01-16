import { View, Text, Image, Pressable } from 'react-native';
import { useState } from 'react';

export default PortfolioItem = (props) => {
  const [isLiked, onLikePressed] = useState(0);
  let likeIcon;
  let dislikeIcon;
  if (isLiked === 1) likeIcon = require('../../assets/likefilled.png');
  else likeIcon = require('../../assets/likeunfilled.png');
  if (isLiked === -1) dislikeIcon = require('../../assets/dislikefilled.png');
  else dislikeIcon = require('../../assets/dislikeunfilled.png');
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
        <Text
          style={{
            fontFamily: 'Lato-Light',
            color: '#FFFFFF',
            fontSize: 28,
          }}>
          {props.title}
        </Text>
        <View
          style={{
            flexDirection: 'row-reverse',
            flex: 1,
            alignItems: 'center',
            gap: 8,
          }}>
          <Pressable
            onPress={() =>
              onLikePressed((current) => {
                if (current !== -1) return -1;
                else return 0;
              })
            }>
            <Image source={dislikeIcon} style={{ tintColor: '#FFFFFF' }} />
          </Pressable>
          <Pressable
            onPress={() =>
              onLikePressed((current) => {
                if (current !== 1) return 1;
                else return 0;
              })
            }>
            <Image source={likeIcon} style={{ tintColor: '#FFFFFF' }} />
          </Pressable>
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Image
          style={{
            flex: 1,
            height: 200,
            marginVertical: 8,
          }}
          source={props.image}
        />
      </View>
      <Text
        style={{
          fontFamily: 'Lato-Light',
          color: '#FFFFFF',
          fontSize: 22,
        }}>
        {props.description}
      </Text>
    </View>
  );
};
