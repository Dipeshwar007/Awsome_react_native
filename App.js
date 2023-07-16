import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// import components
import LittleLemonHeader from './components/littleLemonHeader';
import LittleLemonFooter from './components/littleLemonFooter';
import MainContent from './components/mainContent';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LittleLemonHeader />
      <MainContent />
      <LittleLemonFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B4E47',
    // backgroundColor: '#ffff',
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    alignSelf:"flex-start",
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textShadowColor: '#000',
    textShadowRadius: 100,
  }
});
