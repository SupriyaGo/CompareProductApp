import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Modal,
  TextInput,
} from 'react-native';
import styles from './Style';
import Header from './../../../Components/Header';
import {mobiles} from './../../../utils/dataSet';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {addFavourite} from './../../../Redux/Actions';

const Detail = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  const {index} = route.params;

  return (
    <View style={styles.container}>
      <Header heading="Details" navigation={navigation} />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.productName}>{mobiles[index].item.name}</Text>
        <Text style={styles.productDesc}>{mobiles[index].item.specs}</Text>

        <Image
          style={styles.productImage}
          source={require('./../../../../Assets/mobile.jpg')}
          resizeMode="contain"
        />

        <Text style={styles.price}>
          Lowest Price: {mobiles[index].item.amazon.price} /-
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <LinearGradient
              colors={['#FAD02E', '#DFAF2B']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Add to watch list
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              dispatch(addFavourite(index + 1));
            }}>
            <LinearGradient
              colors={['#FAD02E', '#DFAF2B']}
              style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}>
                Add to favourites
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        <Text style={styles.compareHeading}>Compare prices -</Text>
        <View style={{marginVertical: 20}}>
          {/* amazon */}
          <View style={styles.compareContainer}>
            <Text style={styles.Company}>Amazon</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.priceText}>
                {mobiles[index].item.amazon.price}/-
              </Text>
              <Text style={styles.priceText}>
                Rating {mobiles[index].item.amazon.rating}{' '}
              </Text>
              <TouchableOpacity
                onPress={() => Linking.openURL(mobiles[index].item.amazon.link)}
                style={styles.buyBtn}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* flipkart */}
          <View style={styles.compareContainer}>
            <Text style={styles.Company}>Flipkart</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.priceText}>
                {mobiles[index].item.flipkart.price}/-
              </Text>
              <Text style={styles.priceText}>
                Rating {mobiles[index].item.flipkart.rating}{' '}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(mobiles[index].item.flipkart.link)
                }
                style={styles.buyBtn}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* TATA Cliq */}
          <View style={styles.compareContainer}>
            <Text style={styles.Company}>TATACliq</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.priceText}>
                {mobiles[index].item.tataCLIQ.price}/-
              </Text>
              <Text style={styles.priceText}>
                Rating {mobiles[index].item.tataCLIQ.rating}{' '}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(mobiles[index].item.tataCLIQ.link)
                }
                style={styles.buyBtn}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Paytm Mall */}
          <View style={styles.compareContainer}>
            <Text style={styles.Company}>Paytm</Text>
            <View style={styles.priceRatingContainer}>
              <Text style={styles.priceText}>
                {mobiles[index].item.paytmMall.price}/-
              </Text>
              <Text style={styles.priceText}>
                Rating {mobiles[index].item.paytmMall.rating}{' '}
              </Text>
              <TouchableOpacity
                onPress={() =>
                  Linking.openURL(mobiles[index].item.paytmMall.link)
                }
                style={styles.buyBtn}>
                <Text style={styles.buyText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: 40}} />
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>What is your expected price</Text>
            <TextInput
              style={styles.priceInput}
              placeholder="Enter Price"
              placeholderTextColor="#333333"
            />

            <TouchableOpacity
              style={styles.openButton}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text style={styles.textStyle}>Set on watch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Detail;
