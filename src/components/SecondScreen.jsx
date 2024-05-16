import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const SecondScreen = ({fadeOut, fadeIn}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Second Screen</Text>
      <Button
        color="crimson"
        title="Go to FIRST SCREEN"
        onPress={() => {
          fadeOut(), setTimeout(fadeIn, 1000);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  text: {
    color: '#f5f5f8',
  },
});

export default SecondScreen;
