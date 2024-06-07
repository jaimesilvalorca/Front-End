import { StyleSheet } from "react-native"
import { colors } from '../../global/colors'


const StyleHeader = StyleSheet.create({

  headerContainer:{
    height: 100,
    alignItems:'center',
    backgroundColor:'#22223B',
    flexDirection:'row',
    paddingHorizontal:30,
    paddingTop:30,
  },
  headerContainers:{
    height: 100,
    alignItems:'center',
    backgroundColor:'red',
    flexDirection:'row',
    paddingHorizontal:30,
    paddingTop:30,
  },
  headerContainerp:{
    height: 100,
    alignItems:'center',
    backgroundColor:'blue',
    flexDirection:'row',
    paddingHorizontal:30,
    paddingTop:30,
  },
  headerContainerx:{
    height: 100,
    alignItems:'center',
    backgroundColor:'green',
    flexDirection:'row',
    paddingHorizontal:30,
    paddingTop:30,
  },
  headerTitle:{
    paddingLeft:'35%',
    color:'#fff',
    display:'flex',
    fontFamily:'ComicNeue-Bold',
    fontSize:24
  },
  viewNull:{
    paddingLeft:'6%'

  },
  logout:{
    marginLeft:170
  }


})


 export default StyleHeader