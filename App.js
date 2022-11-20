import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cestas';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar></StatusBar>
      <Cesta />      
    </SafeAreaView>
  );
}


