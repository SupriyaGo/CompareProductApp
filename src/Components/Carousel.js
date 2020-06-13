import React, {useState} from 'react';
import {View, Text, Dimensions, Image, ImageBackground} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const width = Dimensions.get('window').width;

const CarouselComp = () => {
  const [carouselItems, setCarouselItems] = useState([
    {
      title: 'Refrigerator',
      link: require('./../../Assets/fridge.jpg'),
    },
    {
      title: 'Mpbile Phones',
      link: require('./../../Assets/mobile.jpg'),
    },
    {
      title: 'Laptops',
      link: require('./../../Assets/laptop.jpg'),
    },
    {
      title: 'Tablets',
      link: require('./../../Assets/tablet.jpg'),
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          // borderRadius: 5,
          height: 150,
          margin: 10,
          elevation: 6,
          zIndex: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={item.link}
          width={'100%'}
          height={150}
          resizeMode="contain"
          style={{
            // borderRadius: 5,
            zIndex: 10,
          }}
        />
        <Text
          style={{
            fontSize: 22,
            zIndex: 20,
            position: 'absolute',
            color: '#fff',
            backgroundColor: ' rgba(255, 255, 255, 0.3)',
            padding: 10,
          }}>
          {item.title}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <Carousel
        layout={'default'}
        data={carouselItems}
        sliderWidth={width}
        itemWidth={width}
        renderItem={_renderItem}
        // onSnapToItem={index => this.setState({activeIndex: index})}
      />
    </View>
  );
};

export default CarouselComp;
