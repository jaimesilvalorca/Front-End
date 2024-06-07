import { ActivityIndicator, FlatList } from 'react-native'
import ProductItem from '../../components/productItem/ProductItem'
import { useState, useEffect } from 'react'
import Search from '../../components/search/Search'
import { useSelector, useDispatch } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopService'
import Header from '../../components/header/Header'

const ProductsByCategoryScreen = ({ navigation, route }) => {

  const [productsByCategory, setProductsByCategory] = useState([])
  const [search, setSearch] = useState('')

  const category = useSelector(state => state.shopReducer.categorySelected)
  console.log(category)
  // const productsFilteredByCategory = useSelector(state=>state.shopReducer.productsFilteredByCategory)
  const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category)


  console.log(route)
  // const {category} = route.params

  useEffect(() => {
    // const productsFilteredByCategory = products_data.filter(product => product.category === category)
    if (!isLoading) {
      const productsValues = Object.values(productsFilteredByCategory)
      const productsFiltered = productsValues.filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
      setProductsByCategory(productsFiltered)

    }

  }, [category, search])



  const renderProductItem = ({ item }) => (
    <ProductItem
      product={item}
      navigation={navigation}
    />
  )

  const onSearch = (search) => {
    setSearch(search)
  }

  return (
    <>
      {
        isLoading ?
          <ActivityIndicator />
          :
          <>
            <Header title="Products" navigation={navigation} />
            <Search onSearchHandlerEvent={onSearch} />
            <FlatList
              data={productsByCategory}
              renderItem={renderProductItem}
              key={item => item.id}

            />
          </>
      }
    </>
  )
}

export default ProductsByCategoryScreen

