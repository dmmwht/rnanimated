import React, {useRef, useState} from 'react';
import {Animated, StyleSheet} from 'react-native';
import FirstScreen from './components/FirstScreen';
import SecondScreen from './components/SecondScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('first');
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setCurrentScreen(currentScreen === 'first' ? 'second' : 'first');
    });
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{...styles.container, opacity: fadeAnim}}>
      {currentScreen === 'first' ? (
        <FirstScreen fadeOut={fadeOut} fadeIn={fadeIn} />
      ) : (
        <SecondScreen fadeOut={fadeOut} fadeIn={fadeIn} />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
});

export default App;
