import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, Alert, StatusBar } from 'react-native';
import { Ionicons, AntDesign,MaterialCommunityIcons } from '@expo/vector-icons';

const imgData = [
  { id: 1, imgSource: require('./assets/porche_718.jpg') },
  { id: 2, imgSource: require('./assets/porche_911_4.webp') },
  { id: 3, imgSource: require('./assets/porsche_5.jpg') },
  { id: 4, imgSource: require('./assets/porsche_6.jpg') },
  { id: 5, imgSource: require('./assets/porsche_718_2.png') },
  { id: 6, imgSource: require('./assets/porsche_911_1.jpg') },
  { id: 7, imgSource: require('./assets/porsche_911_2.jpg') },
  { id: 8, imgSource: require('./assets/porsche_911_3.webp') },
  { id: 9, imgSource: require('./assets/porsche_911_4.jpg') },
  { id: 10, imgSource: require('./assets/porscher_6.jpg') },
];

export default function App() {
  const centerImgData = Math.floor(imgData.length /2);
  const showAlert = () =>{
    Alert.alert(
       'Features will update soon!!'
    )
 }
  return (
    <View style={styles.container}>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#ffffff" translucent = {true}/>
      <View style={styles.Header_Top}>
        <View style={styles.set_title}>
           <TouchableHighlight style={styles.Button_Header} onPress = {showAlert} >
                  <Ionicons style={styles.set_imageleft} name="md-arrow-back"  size={30} />
            </TouchableHighlight>
        </View>
        <View style = {styles.set_title}>
            <TouchableHighlight style={styles.Button_Header} onPress = {showAlert} >
                  <AntDesign style={styles.set_imageRight} name="appstore1" color="#858483" size={25} />  
            </TouchableHighlight>
        </View>
      </View>
      <View style= {styles.Header}>
        <View style={styles.avatar}>
          <Image  style = {styles.imageAvatar}
            source={require('./assets/porche_718.jpg')} > 
          </Image>
        </View>
        <View style={styles.name}>
            <View style= {styles.name_name}>
                <Text style={styles.set_textName} > Porsche VN</Text>
                <Text  style={styles.set_textNormal}> Showroom Car</Text>
            </View>
            <View style={styles.name_button}>
                <View style={styles.name_button_flow}>
                  <TouchableHighlight style={styles.ButtonFlow}
                      onPress = {showAlert}>
                      <Text style={styles.set_textFollow}>Follow</Text>
                  </TouchableHighlight>
                
                </View>
                <View style ={styles.name_button_sent}>
                  <TouchableHighlight style={styles.ButtonSent}
                      onPress = {showAlert}>
                      <Ionicons style={styles.set_iconSent} name="md-send" color="red" size={29} />
                  </TouchableHighlight>
                </View>
            </View>
         </View>
      </View>
      <View style = {styles.Infor}>
        <View style={styles.Infor_photo}>
          <Text style={styles.set_Text}>210 </Text>
          <Text style={styles.set_textNormalInfor}>Photos</Text>
        </View>
        <View style={styles.Infor_photo}>
          <Text style={styles.set_Text} >50k</Text>
          <Text style={styles.set_textNormalInfor}>Followers</Text>
        </View>
        <View style={styles.Infor_photo}>
          <Text style={styles.set_Text} >700</Text>
          <Text style={styles.set_textNormalInfor}>Following</Text>
        </View>
        
      </View>
      <View style = {styles.Bottom_container}> 
          <ScrollView contentContainerStyle = {{  flexDirection:'row',
                                                  justifyContent: 'space-around',
                                                 }}>

            <View style ={styles.set_picture}>
              <View > 
                  {imgData.slice(0, centerImgData).map(item =>{return <Image source = {item.imgSource} style={styles.image} key={item.id}/>
                })}
              </View>           
            </View>

            <View style={styles.set_picture}>
                  {
                    imgData.slice(centerImgData).map(item =>{return <Image source = {item.imgSource} style={styles.image} key={item.id}/>
                    })}

            </View>

          </ScrollView>
      </View>
      <View style = {styles.Bottom}>
          <View style = {styles.Button_tab}>
              <TouchableHighlight style={styles.set_buttonTab} onPress = {showAlert}>
                <MaterialCommunityIcons style={styles.set_imagefe} name="arrange-send-backward"  size={30} />
              </TouchableHighlight>
          </View>
          <View style = {styles.Button_tab}>
              <TouchableHighlight style={styles.set_buttonTab} onPress = {showAlert}>
                <AntDesign style={styles.set_imageHome} name="pluscircleo"  size={30} />
              </TouchableHighlight>
          </View>
          <View style = {styles.Button_tab}>
             <TouchableHighlight style={styles.set_buttonTab} onPress = {showAlert}>
                <AntDesign style={styles.set_imageConnect} name="user"  size={30}  />
             </TouchableHighlight>
          </View>
      </View>

    </View> 
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     paddingTop: 25,
  },
  Header_Top: {
    flex: 0.05,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  Header: {
    flex: 0.225,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    
  },
  Infor: {
    flex: 0.09,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  Bottom_container: {
    flex: 0.585,
    flexDirection: 'row',
    justifyContent:'center',
   // backgroundColor: '#00ff00',
    backgroundColor: '#ffffff',
  },
  Bottom: {
    flex: 0.05,
    flexDirection: 'row',
    //backgroundColor: '#ffff66',
    backgroundColor: '#ffffff',
  },

  imageAvatar: {
    
    width: 150, height: 150,
    borderTopLeftRadius:75,
    borderTopRightRadius:75,
    borderBottomLeftRadius:75,
    borderBottomRightRadius:75,
  },
 
  avatar: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name:{
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: '#ffff66',
  },
  name_name: {
    flex: 0.48,
    marginLeft: 10,
    marginTop: 20,
    paddingTop: 5,
    // backgroundColor: '#00ff00',
  },
  name_button:{
    flex: 0.52,
    flexDirection: 'row',
    // backgroundColor: '#99ffff',
  },
  name_button_flow:{
     flex: 0.6,
 
    // backgroundColor: '#00ffff',
  },
  name_button_sent: {
    flex: 0.4,
    // backgroundColor: '#99ffff',
  },
  Infor_photo: {
    flex: 0.33333,
    justifyContent: 'space-around',
    // alignItems: 'center',
    // backgroundColor: '#ff0099',
  },
  set_Text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    color: '#273357',
  },
  set_textName: {
    fontSize: 25,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#273357',
  },
  set_textNormal:{
    fontSize: 14,
    textAlign: 'left',
    fontWeight: 'normal',
    color: '#273357',
    },
  set_textFollow:{
    fontSize: 19,
    textAlign: 'center',
    fontWeight: 'bold',
    //paddingTop: 12,
    marginTop: 10,
    color: '#ffffff'
  },
  set_iconSent:{
   textAlign: 'center',
   // paddingTop: 12,
   marginTop:9,
   color: '#ffffff'
  },
  set_textNormalInfor:{
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'normal',
      marginBottom: 15,
      color: '#273357',
      },
  set_title:{
    flex: 0.5,
  },
  set_imageleft:{
      textAlign: 'left',
      paddingLeft: 12,
      paddingTop: 2,
      color: '#858483',
  },
  set_imageRight:{
    textAlign: 'right',
    paddingRight: 12,
    paddingTop: 5,
  },
  ButtonFlow:{
    flex: 1,
    borderRadius:25,
    backgroundColor: '#0553d0',
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 15,
    
      },
  ButtonSent:{
    flex: 1,
    borderRadius:25,
    backgroundColor: '#27e2fa',
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 15,
    marginLeft: 8,
    marginRight: 8,
  },
  Button_Header:{
 //   backgroundColor: '#27e2fa',
    backgroundColor: '#ffffff',
    overflow: 'hidden',
  },
  Button_tab: {
    flex: 0.3333,
    justifyContent: 'space-around',
    // alignItems: 'center',
    //backgroundColor: '#ff0099',
  },
  set_buttonTab:{
    paddingTop: 2,
  },
  set_imagefe:{
    textAlign: 'right',
    paddingTop: 2,
    color: '#858483',
  },
  set_imageHome:{
    textAlign: 'center',
    paddingTop: 2,
    color: '#858483',
  },
  set_imageConnect:{
    textAlign: 'left',
    paddingTop: 2,
    color: '#858483',
  },
  image:{
    width: 170,
    height: 170,
    borderRadius:10,
    margin: 7,
  },
  set_picture:{
    flexDirection:'column',
   
  },
 




});
