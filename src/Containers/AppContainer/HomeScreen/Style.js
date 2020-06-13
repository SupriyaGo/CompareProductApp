import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrolLView: {
    flex: 1,
  },
  carouselHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 10,
  },
  cardContainer: {
    marginVertical: 10,
    width: 340,
    alignSelf: 'center',
    elevation: 8,
  },
  productImage: {
    width: 340,
    borderRadius: 3,
  },
  addFavBtn: {
    position: 'absolute',
    right: 10,
    top: 15,
    backgroundColor: '#ccc',
    borderRadius: 30,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    marginLeft: 20,
    color: '#333333',
    fontSize: 17,
    fontWeight: 'bold',
    padding: 3,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 15,
    right: 0,
  },
  productDesc: {
    marginLeft: 20,
    color: '#333333',
    fontSize: 15,
    fontWeight: '600',
    paddingRight: 5,
  },
});

export default styles;
