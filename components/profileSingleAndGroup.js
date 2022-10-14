import React from 'react'
import {Button, Card,Title,Text} from 'react-native-paper'
import {ScrollView,StyleSheet,View,ImageBackground,Image} from 'react-native'

function profileSingleAndGroup() {
  return (
    <ImageBackground style={{flex: 1, width: 390, height: 800}} source={require('./images/backgroundImage.png')}>
    <ScrollView>
       
        <Image style={{marginLeft:100,borderRadius:200,width:200,height:200,marginTop:60}} source={require('./images/pp.jpg')}/>
        <Title style={{marginLeft:180}}>Profile</Title>
        <Button textColor='black' icon='help-circle' mode='outlined' style={styles.btn}>Help and feedback</Button>
        <Button icon='update' mode='outlined' style={styles.btn}>Update details</Button>
        <Button icon='cog' mode='outlined' style={styles.btn}>Settings</Button>
        <Button icon='logout' mode='outlined' style={styles.btn}>Signout</Button>

</ScrollView>
</ImageBackground>
  )
}
  const styles=StyleSheet.create({
    btn:{
      
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center',
        height:50,
        color:'black'
    }
  })


export default profileSingleAndGroup