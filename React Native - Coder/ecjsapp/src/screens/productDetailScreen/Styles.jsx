import { StyleSheet } from "react-native"

const StyleProductDetailScreen = StyleSheet.create({
  imageProduct: {
    minWidth: 300,
    width: '100%',
    height: 400,

  },
  imageProductLandscape: {
    width: 200,
    height: 200,
  },
  detailContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
  },
  description: {
    fontSize: 20,
  },
  price: {
    fontSize: 32,
  },
  buyButton: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 10,
  },
  buyText: {
    color: '#fff'
  },
  buyAlt: {
    marginTop: 10,
    width: 200,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  }
  
  })


  export default StyleProductDetailScreen