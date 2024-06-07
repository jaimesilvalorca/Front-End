import { ActivityIndicator } from "react-native";
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from "./src/store";
import MainNavigator from "./src/navigation/MainNavigator";
import { init } from "./src/db";


export default function App() {

  init()
  .then(()=>console.log('DB inicializada correctamente'))
  .catch((error)=>console.log(error.message))


  const [fontLoaded] = useFonts({
    'ComicNeue-Regular': require('./assets/fonts/ComicNeue-Regular.ttf'),
    'ComicNeue-Italic': require('./assets/fonts/ComicNeue-Italic.ttf'),
    'ComicNeue-Light': require('./assets/fonts/ComicNeue-Light.ttf'),
    'ComicNeue-Bold': require('./assets/fonts/ComicNeue-Bold.ttf'),
  })

  if (!fontLoaded) return <ActivityIndicator />


  return (

    <Provider store={store}>
      <MainNavigator />
    </Provider>


  );
}

