import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const FirstScreen = ({fadeOut, fadeIn}) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>First Screen</Text>
      <Button
        title="Go to SECOND SCREEN"
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

export default FirstScreen;
