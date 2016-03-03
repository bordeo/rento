'use strict'
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native'

const RestKit = require('react-native-rest-kit')
const Category = RestKit.Model.extend({
  urlRoot: 'http://www.magento2.loc/rest/V1/categories/'
})

class CategoryList extends Component {
  constructor(props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows([]),
    }
    this._getCategories()
  }
  _getCategories() {
    const cat = new Category()
    RestKit.sync('GET', cat, {}, (error) => {
      if (error) console.log(error)
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
      this.state.dataSource = ds.cloneWithRows(cat.get('children_data'))
    })
  }
  renderRow(rowData) {
    return (
      <Text>{rowData.name}</Text>
    )
  }

  render() {
    const content = this.state.dataSource.getRowCount() === 0 ?
      <Text>Sto caricando dammi tempo</Text> :
      <ListView
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow() }
      />
    return (
      <View>
        {content}
      </View>
    )
  }
}

module.exports = CategoryList
