import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  
    
    render() {
    return (
    <View style={styles.container}>
        <Text style={styles.header}> - Profile - </Text>
        <TouchableOpacity style={styles.btn} onPress={this.logout}>
            <Text>Log Out</Text>
        </TouchableOpacity>
    </View>
    );
  }

  logout = () => {
      alert('logout')
      this.props.navigation.navigate('Home')
  }
}

const styles = StyleSheet.create({
    wrapper: {
       flex: 1, 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2896d3',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#fff',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
    },
    btn: {
        alignSelf: 'stretch',
        backgroundColor: '#01c853',
        padding: 20,
        alignItems: 'center',
    }
})

