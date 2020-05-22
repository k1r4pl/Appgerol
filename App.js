import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Alert,
} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}

const App: () => React$Node = () => {
  return (
    <ImageBackground style={styles.imgBackground}
      resizeMode='cover'
      source={require('./p.jpg')}>
      <View>
        <Text style={styles.welcome}>Ensino fundamental</Text>
      </View>
      <ImageBackground style={styles.imgBox}
        resizeMode='cover'
        source={require('./b.png')}>
        <SafeAreaView style={styles.container}>
        <Button
          title="Ensino Fundamental"
          color="#006400"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </SafeAreaView>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1
  },
  Button: {
    width: '1',
    height: '4',
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 8,
  },
  imgBox: {
    width: '90%',
    height: '90%',
    marginVertical: '1%',
    marginHorizontal: '10%',
    flex: 1
  },
  logo: {
    height: '40%',
    marginVertical: '7%',
    width: '100%',
  },
  welcome: {
    color: '#fff',
    fontSize: 22,
    marginVertical: '5%',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    width: '85%',
    height: '70%',
    flex: 1,
    marginTop: 10,
    marginHorizontal: 10,
  },
});

export default App;
