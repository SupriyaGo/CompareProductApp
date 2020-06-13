import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  productName: {
    color: '#333333',
    fontSize: 22,
    fontWeight: 'bold',
  },
  productDesc: {
    color: '#333333',
    fontSize: 15,
    fontWeight: 'bold',
  },
  productImage: {
    marginTop: 30,
    marginBottom: 10,
  },
  price: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },

  btnContainer: {
    marginVertical: 10,
  },

  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  compareHeading: {
    color: '#333333',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
  },
  compareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  Company: {
    color: '#333333',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#DFAF2B',
    paddingHorizontal: 10,
    paddingVertical: 10,
    textAlign: 'center',
    borderRadius: 30,
  },
  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#192A56',
    paddingHorizontal: 15,
    paddingVertical: 10,

    borderRadius: 30,
  },
  priceText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingRight: 10,
  },
  buyBtn: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    paddingHorizontal: 10,
    paddingVertical: 10,

    borderRadius: 30,
  },
  buyText: {
    color: '#333333',
    fontSize: 18,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    elevation: 5,
  },
  priceInput: {
    backgroundColor: '#ccc',
    width: 200,
    borderRadius: 10,
  },
  openButton: {
    backgroundColor: '#2196F3',

    borderRadius: 10,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: 120,
  },
  textStyle: {color: '#fff'},

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default styles;
