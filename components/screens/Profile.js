import React from 'react';
import { Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, StyleSheet } from 'react-native';

export default class Login extends React.Component {
  
    
    render() {
    return (
    <View style={styles.container}>
        <Text style={styles.header}> - Profile - </Text>
        <Text>{this.getUserName()}</Text>
        <TouchableOpacity style={styles.btn} onPress={this.logout}>
            <Text>Log Out</Text>
        </TouchableOpacity>
    </View>
    );
  }

  logout = () => {
      this.props.navigation.navigate('Home')
  }

  getUserName = () => {
    let self = this;
    fetch('https://dev.coras.com/odata/Users?_=1514151757386',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;odata.metadata=minimal',
            'AppId': 'cd57ab8b-e226-44fb-89d9-c7eb571ae864',
            'Authorization': 'Bearer ' + this.props.navigation.state.params.access_token
        },
        
    })
    .then((response) => response.json())
    .then((res) => {
        alert(res)
        //if (res.error){
        //    alert('Error!!!')
        //    return null
       // }
        //else {
        //  return res.DisplayName
        //} 
        return ''
    })
    .done(() => {
        self.setState({animating: false})
    })
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

