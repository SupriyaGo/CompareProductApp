import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';

const FavouriteBtn = () => {
  const FavCount = useSelector(state => state.Fav.favourite);
  return (
    <View style={styles.favContainer}>
      <FontAwesome name="cart-plus" color="#fff" size={24} />
      {FavCount === 0 ? null : <Text style={styles.cartCount}>{FavCount}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  favContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cartCount: {
    fontSize: 15,
    color: '#fff',
    height: 22,
    width: 22,
    backgroundColor: 'tomato',
    textAlign: 'center',
    borderRadius: 30,
    position: 'absolute',
    top: -12,
    right: -12,
  },
});

export default FavouriteBtn;
