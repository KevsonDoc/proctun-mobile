import React from 'react';
import { View, Text } from 'react-native';

import TopMenu from './Components/StatusBar';
import Caroulsel from './Components/Carosel';

const App = () => {
  return (
      <>
        <View style={{ flex: 1, backgroundColor: "rgba(28,28,28, 1)" }}>
          <TopMenu />
          <Caroulsel />
          <View>
            <Text>This is Home</Text>
          </View>
        </View>
      </>
  );
}

export default App;