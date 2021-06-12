import React , {Component} from 'react';
import {View,Text, TextInput,StyleSheet,TouchableOpacity,Alert,Modal,KeyboardAvoidingView ,ScrollView} from 'react-native';
import db from '../config';
import firebase from'firebase';
import { ScrollView } from 'react-native';


export default class Welcome extends Component{
    constructor(){
        super();
        this.state={
            emailid:'',
            password:'',
            isModalVisible:'false',
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:''
        }
    }
    
    userLogin = (emailId, password)=>{ 
        firebase.auth().signInWithEmailAndPassword(emailId, password) .then(()=>{
             return Alert.alert("Successfully Login") })
               .catch((error)=> { var errorCode = error.code; 
                var errorMessage = error.message; 
                return Alert.alert(errorMessage) })
             }
    userSignUp = (emailId, password)=>{ 
                firebase.auth().createUserWithEmailAndPassword(emailId, password) .then((response)=>{
                    return Alert.alert("User added Successfully") })
                       .catch((error)=> { var errorCode = error.code; 
                        var errorMessage = error.message; 
                        return Alert.alert(errorMessage) })
                     }
    showModal=()=>{
        return(
           <Modal 
                animationType="fade"
                transparent={true}
                visible={this.state.isModalVisible}
           >
               <View style={styles.modalContainer}>
                    <ScrollView style={{width:'100%'}}>
                    <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                        <Text style={styles.modalTitle}>Registration   </Text>
                            
                     
                        <TextInput style={styles.fromTextInput} placeholder={"First Name"} maxLength={8}
                             onChangeText={(text)=>{
                                this.setState({firstName:text  })
                            }}
                            >
                           
                            
                        </TextInput>

                        <TextInput style={styles.fromTextInput} placeholder={"Last Name"}  maxLength={8}
                             onChangeText={(text)=>{
                                this.setState({lastName:text})
                            }}
                            >   
                                
                          
                          
                        </TextInput>

                        <TextInput style={styles.fromTextInput}  placeholder={"Contact:"} maxLength={10} keyboardType={'numeric'}
                            onChangeText={(text)=>{
                                this.setState({contact:text })
                            }}
                        >
                            
                        </TextInput>

                        <TextInput style={styles.fromTextInput}  placeholder={"Adress"}    multiline={true}
                            onChangeText={(text)=>{
                                this.setState({  address:text})
                            }}
                        >

                        </TextInput>

                        <TextInput style={styles.fromTextInput} placeholder={"email:"}  keyboardType={'emailAdress'}
                          onChangeText={(text)=>{
                            this.setState({  email:text })  
                        }}
                    > 
                        </TextInput>

                        <TextInput style={styles.fromTextInput}  placeholder={"password:"} secureTextEntry={true}
                           onChangeText={(text)=>{
                            this.setState({password:text })
                        }}
                    >
          
                        </TextInput>

                        <TextInput style={styles.fromTextInput}   placeholder={"confirmPassword:"}  secureTextEntry={true}
                            onChangeText={(text)=>{
                                this.setState({ confirmPassword:text})
                            }}
                        > 
                        </TextInput>
                        <View style={stlyes.modalBackButton}>
                            <TouchableOpacity style={styles.registerButton}
                                onPress={()=>
                                    this.userSignUp(this.state.emailid,this.state.password,this.state.confirmPassword)
                                }
                            >
                                <Text style={styles.registerButtonText}>   Register</Text>
                  
                            </TouchableOpacity>
                            
                        </View>
                        <View style={stlyes.modalBackButton}>
                            <TouchableOpacity style={styles.CancelButton}
                                onPress={()=>
                                   this.setState({"isModalVisible":false})
                                }
                            >
                                <Text style={{color:'purple'}}> Cancel </Text>
                                </TouchableOpacity>
                            </View>
                        
                    </KeyboardAvoidingView>
                    </ScrollView>
                </View>

             </Modal>
                                 
                            
        );
    }
    render()
{
    return(
        <View style={styles.container}>
            <View style={styles.profileContainer}>
               
               <Text stlye={styles.title}>Book Santa</Text>
            </View>
            
            <View>
                <TextInput style={styles.loginBox}  placeholder='abc@example.com'  keyboardType='email-address'
                    onChangeText={(text)=>{
                        this.setState({ emailid:text})
                    }}
                />
                   
                    
                   
                <TextInput style={styles.loginBox} secureTextEntry={true} placeholder='Enter password'
                  onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}
            />
               <TouchableOpacity style={[styles.button,{marginBottom:20,marginTop:20}]}
                    onPress={()=>{
                        this.userLogin(this.state.emailid,this.state.password)
                    }}
               >
                   <Text style={styles.buttonText}> Login </Text>
               </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{
                        this.userSignUp(this.state.emailid,this.state.password)
                    }}
               >
                   <Text style={styles.buttonText}> SignUp </Text>
                

                </TouchableOpacity>
            </View>
        </View>
        
    )
}        
    
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'pink',
    },
    title:{
        fontSize:65,
        fontWeight:300,
        paddingBottom:30,
        color:'purple'
    },
    loginBox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10,
        borderColor:'black'
    },
    button:{
        width:300,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        borderColor:'black',
        shadowColor:'white',
        shadowOffset:{width:0,height:8}
    },
    buttonText:{
        color:'white',
        fontWeight:'200',
        fontSize:20,
    },
    buttonContainer:{
        flex:1,
        alignItems:'center'
    }
})