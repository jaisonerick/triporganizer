import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StatusBar, StyleSheet } from 'react-native';
import Logo from 'triporganizer/components/Logo';
import TextInput from 'triporganizer/components/TextInput';
import PrimaryButton from 'triporganizer/components/PrimaryButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import * as authActions from "../auth";

const mapStateToProps = (state, props) => {
  return {
    loginError:       state.auth && state.auth.loginError,
    user:             state.currentUser
  }
}

const mapDispatchToProps = {
  ...authActions
}

@connect(mapStateToProps, mapDispatchToProps)
export default class LoginApp extends Component {
  constructor() {
    super();
    this.state = {
      credentials: {},
      valid: false,
    };
  }
  focusPassword() {
    this.passwordField.focus();
  }

  onChange(fieldName, fieldValue) {
    this.setState({ credentials: { ...this.state.credentials, [fieldName]: fieldValue }});
  }

  login() {
    const { credentials } = this.state;
    const { login } = this.props;

    login(credentials);
  }

  render() {
    const { credentials: { email, password } } = this.state;
    const { loginError } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
        />


        <KeyboardAwareScrollView style={styles.scroll} contentContainerStyle={styles.contents}>
          <Logo style={styles.logo} />

          {
            loginError &&
            <Text style={styles.loginError}>O e-mail ou a senha estão incorretos.</Text>
          }

          <TextInput
            placeholder="E-mail"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => this.onChange('email', text)}
            returnKeyType="next"
            value={email}
            onSubmitEditing={() => this.focusPassword()}
          />

          <TextInput
            ref={(el) => this.passwordField = el}
            placeholder="Senha"
            autoCorrect={false}
            secureTextEntry
            onChangeText={(text) => this.onChange('password', text)}
            value={password}
            returnKeyType="done"
            onSubmitEditing={() => this.login()}
          />

          <PrimaryButton text="ENTRAR" onPress={() => this.login()} />

          <Text style={styles.message}>Com o trip organizer você tem acesso ao seu roteiro de viajem, suas informações e dicas úteis</Text>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

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
  },
  loginError: {
    color: 'white',
    fontSize: 18,
    marginBottom: 30,
  }
});

