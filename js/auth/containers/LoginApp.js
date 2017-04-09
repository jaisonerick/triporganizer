import React, { Component } from 'react';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Logo from 'triporganizer/components/Logo';
import TextInput from 'triporganizer/components/TextInput';
import PrimaryButton from 'triporganizer/components/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3E50B4",
  },
  logo: {
    marginTop: 40,
    marginBottom: 70,
  },
  scroll: {
    flex: 1,
  },
  contents: {
    paddingTop: 40,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: 'white',
    textAlign: 'center',
    marginTop: 40,
  }
});

export default class LoginApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />


        <KeyboardAwareScrollView style={styles.scroll} contentContainerStyle={styles.contents}>
          <Logo style={styles.logo} />

          <TextInput
            placeholder="E-mail"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => console.log(text)}
            returnKeyType="next"
            onSubmitEditing={() => console.log('next')}
          />

          <TextInput
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            onChangeText={(text) => console.log(text)}
            returnKeyType="done"
            onSubmitEditing={() => console.log('next')}
          />

          <PrimaryButton text="ENTRAR" />

          <Text style={styles.message}>Com o trip organizer você tem acesso ao seu roteiro de viajem, suas informações e dicas úteis</Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
