import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cestas';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const[fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratRegular": Montserrat_700Bold,
  });

  if (!fontCarregada) {
    return <view/>
  }


  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta />      
    </SafeAreaView>
  );
}


