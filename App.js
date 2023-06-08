import * as React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { PaperProvider, Text, Button, Avatar, Surface } from 'react-native-paper';

import User from './Components-Login/User-I';
import Password from './Components-Login/Password-I';


const image = { uri: 'https://reactjs.org/logo-og.png' };
const theme = {

  colors: {
  },
};

export default function App() {
  return (
    <PaperProvider>
      <ImageBackground  /*source={image} resizeMode="cover"*/  style={style.container}>

        <View style={style.Top}>

          <Avatar.Icon theme={theme.colors} size={70} icon="account" />
          <Text
            style={style.TextF}
            variant="displaySmall">Login</Text>

        </View>

        <User />
        <Password />

        <Button
          mode="contained"
          icon="arrow-right-bold"
          buttonColor='#000000'
          onPress={() => console.log('Pressed')}>lon in</Button>
        <Button
          textColor='#d32f2f'
          ode="Text" onPress={() => console.log('Pressed')}>Olvido su contraseña!</Button>

      </ImageBackground>
    </PaperProvider>
  );
}

const style = StyleSheet.create({

  Top: {
    flex: 0.4,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '',
  },

  TextF: {
    fontFamily: 'sans-serif-light',
    fontWeight: 'normal',
  },
})

