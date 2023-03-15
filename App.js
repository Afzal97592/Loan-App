import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler'
import Login from './src/pages/Login'
import { NativeRouter, Route, Routes } from 'react-router-native';
import OtpPage from './src/pages/OtpPage';
import Services from './src/pages/Services';
import LosPage from './src/pages/LosPage';
import NewLosComponent from './src/components/NewLosComponent';
import IndexStack from './IndexStack';
import Example from './Example';





  



export default function App() {
  return (
    // //  <View style={styles.container}>
    // {/* //  <NativeRouter>
    // //      <Routes>
    // //      <Route exact path='/' element={<Login />} />
    // //      <Route  path='/otp' element={<OtpPage />} />
    // //      <Route path='/' element={<Services />} />
    // //      <Route path='/los' element={<LosPage />} />
    // //      <Route path='/los/newlos' element = {<NewLosComponent />} />
    // //      </Routes>
    // //    </NativeRouter>   */}

    <IndexStack />
        // {/* // <StatusBar style="auto" /> */}
    //  </View>

    //  <Example />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
