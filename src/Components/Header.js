import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FavouriteBtn from './FavouriteBtn';

const Header = props => {
  return (
    <View
      style={[
        styles.mainContainer,
        {height: props.heading === 'Home' ? null : '12%'},
      ]}>
      <View style={styles.headerContainer}>
        {props.heading === 'Home' ? null : (
          <FontAwesome
            name="arrow-left"
            color="#fff"
            size={24}
            onPress={() => props.navigation.navigate('Home')}
          />
        )}

        <View>
          <Text style={styles.heading}>{props.heading}</Text>
          <Text style={styles.tagLine}>Compare Everywhere</Text>
        </View>

        <FavouriteBtn />

        {/* <FontAwesome name="cart-plus" color="#fff" size={24} /> */}
      </View>
      {props.heading === 'Home' ? (
        <TextInput
          style={styles.searchBar}
          placeholder="Search products"
          placeholderTextColor="#333333"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#05375a',
    elevation: 12,

    paddingVertical: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  heading: {
    fontSize: 22,
    color: '#fff',
  },
  tagLine: {
    fontSize: 12,
    color: '#ccc',
  },
  searchBar: {
    backgroundColor: '#fff',
    width: '95%',
    alignSelf: 'center',
    marginTop: 8,
    fontSize: 15,
    height: 40,
  },
});

export default Header;
