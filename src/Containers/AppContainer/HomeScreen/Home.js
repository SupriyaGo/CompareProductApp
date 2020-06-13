import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './Style';
import Header from './../../../Components/Header';
import Carousel from './../../../Components/Carousel';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {mobiles} from './../../../utils/dataSet';
import {useDispatch} from 'react-redux';
import {addFavourite} from './../../../Redux/Actions';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  const onCardPress = (product, index) => {
    navigation.navigate('Detail', {name: product, index: index});
  };

  return (
    <View style={styles.container}>
      <Header heading="Home" />

      <ScrollView style={styles.scrolLView}>
        <Text style={styles.carouselHeading}>Best Offers</Text>
        <Carousel />

        <Text style={styles.carouselHeading}>CheckOut products</Text>

        {mobiles.map((items, i) => (
          <TouchableWithoutFeedback
            key={i}
            onPress={() => onCardPress(items.item.name, i)}>
            <View style={styles.cardContainer} key={i}>
              <Image
                style={styles.productImage}
                source={require('./../../../../Assets/mobile.jpg')}
                resizeMode="contain"
              />
              <TouchableOpacity
                style={styles.addFavBtn}
                onPress={() => dispatch(addFavourite(i + 1))}>
                <FontAwesome name="heart" color="tomato" size={20} />
              </TouchableOpacity>

              <Text style={styles.productName}>{items.item.name}</Text>
              <Text style={styles.productDesc}> {items.item.specs}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
// test
