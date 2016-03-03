/**
* Sample React Native App
* https://github.com/facebook/react-native
*/
'use strict'
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TouchableHighlight,
  // AlertIOS,nst
  Text,
  View
} from 'react-native'

const CategoryList = require('./CategoryList')
const RestKit = require('react-native-rest-kit')
const Product = RestKit.Model.extend({
  urlRoot: 'http://www.magento2.loc/rest/V1/products/'
})
const Category = RestKit.Model.extend({
  urlRoot: 'http://www.magento2.loc/rest/V1/categories/'
})

class Rento extends Component {
  _onPressButtonPOST() {
    const option = {
      headers: {
        Authentiacation: 'Bearer j3d2phxds8oih3hmupxt7lock7kv5pu5'
      }
    }
    // const pro = new Product({
    //   _id: '24-MB01',
    // })


    // pro.fetch(option, (error) => {
    //   if (error) console.log(error)
    //   console.log(pro)
    // })
    const cat = new Category()
    RestKit.sync('GET', cat, option, (error) => {
      if (error) console.log(error)
      console.log(cat)
    })
    // cat.get(option, (error) => {
    //   if (error) console.log(error)
    //   console.log(cat)
    // })

    // var request = {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   }
    // }
    // request['body'] = JSON.stringify({"username": "admin", "password": ""});
    //
    // fetch("http://magento2.loc/rest/V1/integration/admin/token", request)
    // .then((response) => {
    //   console.log(response)
    //   response.json()
    // })
    // .then((responseData) => {
    //   AlertIOS.alert(
    //     "POST Response",
    //     "Response Body -> " + JSON.stringify(responseData.body)
    //   )
    // })
    // .done();
  }
  render() {
    return (
      <CategoryList/>
      // <View style={styles.container}>
      //   <TouchableHighlight onPress={this._onPressButtonGET} style={styles.button}>
      //     <Text>GET</Text>
      //   </TouchableHighlight>
      //   <TouchableHighlight onPress={this._onPressButtonPOST} style={styles.button}>
      //     <Text>POST</Text>
      //   </TouchableHighlight>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

AppRegistry.registerComponent('Rento', () => Rento)
