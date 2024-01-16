import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import PortfolioItem from './components/props/PortfolioItem';
import SectionTitle from './components/props/SectionTitle';
import Divider from './components/props/Divider';
import AboutMe from './components/props/AboutMe';
import { useFonts } from 'expo-font';

function App() {
  const [fontLoaded] = useFonts({
    'Lato-Light': require('./assets/font/Lato-Light.ttf'),
    'Lato-Thin': require('./assets/font/Lato-Thin.ttf'),
    'Lato-Regular': require('./assets/font/Lato-Regular.ttf'),
  });

  // if (!fontLoaded) return null;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}>
      <ScrollView
        style={{
          padding: 16,
          position:'absolute',
          height:'100%',
          width:'100%',
        }}>
        <SectionTitle content="About Me" />
        <AboutMe />
        <SectionTitle content="My Project" />
        <PortfolioItem
          title="DutaGames"
          description="Sebuah blanalblabalbalbalbalbalbalbalblbalbalbalablablablabalbblbalblanlnalnalablablablabal"
          image={require('./assets/lumba_lumba.jpg')}
        />
        <PortfolioItem
          title="DutaGames"
          description="Sebuah blanalblabalbalbalbalbalbalbalblbalbalbalablablablabalbblbalblanlnalnalablablablabal"
        />
        <PortfolioItem
          title="DutaGames"
          description="Sebuah blanalblabalbalbalbalbalbalbalblbalbalbalablablablabalbblbalblanlnalnalablablablabal"
        />
      </ScrollView>
      <View
        style={{
          height:'100%',
          flexDirection: 'column-reverse',
          zIndex:-1,
          alignItems:'flex-end'
        }}>
        <Image
          style={{
            width: '90%',
            height: '50%',
            opacity: 0.4,
          }}
          source={require('./assets/bg.png')}
          resizeMode="stretch"
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
