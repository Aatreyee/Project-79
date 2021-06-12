import React, { Component } from 'react';
import { View,Text,TextInput, StyleSheet,TouchableOpacity,Alert, Modal, KeyboardAvoidingView,ScrollView,} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../component/MyHeader';

export default class Exchange extends Component {
  constructor() {
    super();
    this.state = {
      userid: firebase.auth().currentUser.email,
      bookName: '',
       userName:'',
    };
  }

  addItem=(itemName, discription)=>{
    var userName=this.state.userName;
    db.collection("exchane_requests").add({
      "username": userName,
      "item_name":itemName,
      "description":itemdescription
    })
    this.state({
      itemName:"",
      itemdescription:""
    })
    return Alert.alert(
      'Item ready to exchange',
      '',
      [
        {text: 'Ok', onPress:()=>{
          this.props.navigation.navigate('HomeScreen')
        }}
      ],
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MyHeader title="Exchanging item" />
        <KeyboardAvoidingView style={styles.keyboardstyle}>
          <TextInput
            style={styles.fromTextInput}
            placeholder={'Enter Your Name'}
            onChangeText={(text) => {
              this.setState({
                bookName: text,
              });
            }}
            value={this.state.bookName}></TextInput>

          <TextInput
            style={styles.fromTextInput}
            multiline
            numberOfLines={8}
            placeholder={'Item Discription'}
            onChangeText={(text) => {
              this.setState({itemdescription: text });
            }}
            value={this.state.itemdescription}></TextInput>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              this.addRequest(this.state.bookName, this.state.itemdescription);
            }}>
            <Text>Exchange book </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    );
  }
}
