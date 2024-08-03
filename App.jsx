import React, {useState, useEffect, useRef} from 'react';
import {SafeAreaView, Text, View, Image, Dimensions} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const App = ({}) => {
  const arr = [
    {
      id: 1,
      image: require('../assets/images/image1.png'),
    },
    {
      id: 2,
      image: require('../assets/images/image2.png'),
    },
    {
      id: 3,
      image: require('../assets/images/image3.png'),
    },
  ];
  const screenWidth = Dimensions.get('window').width;
  const [indexSelected, setIndexSelected] = useState(0);
  const carouselRef = useRef(null);

  const onSelect = selectedIndex => {
    setIndexSelected(selectedIndex);
  };

  const _renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginTop: 20,
          width: '100%',
          borderRadius: 20,
          backgroundColor: '#ffccf0',
          alignItems: 'center',
        }}>
        <Image
          source={item.image}
          style={{width: '90%', height: 250, resizeMode: 'contain'}}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: 40,
      }}>
      <Carousel
        ref={carouselRef}
        data={arr}
        renderItem={_renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth - 80}
        startAutoplay={true}
        onSnapToItem={index => onSelect(index)}
      />
    </SafeAreaView>
  );
};

export default App;
