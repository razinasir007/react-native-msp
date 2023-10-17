import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, FlatList, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { ContactCard } from '../../components/contact/contactCard';
import { dummyData } from '../../constants';
import AddContact from '../../components/contact/addContact';
export const Contact = () => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dummyData);
  const handleSearch = (text) => {
    const filtered = dummyData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) || item.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.searchInputContainer}>
          <Icon name='search' size={20} />
          <TextInput
            style={{ marginLeft: 10, fontSize: 16, height: 25 }}
            placeholder='Search Contact..'
            onChangeText={(e) => {
              setSearchText(e);
              handleSearch(e);
            }}

            name='contact'

          />

        </View>
        <AddContact />
      </View>
      <FlatList data={filteredData} renderItem={({ item }) => <View style={{ marginTop: 10 }} key={item.id}>
        <ContactCard fullname={item.name} email={item.email} handleClick={() => console.log('pressed')} />
      </View>} keyExtractor={item => item.id} />
    </View >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // width:'90%'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    // backgroundColor:'white',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingRight: 20
  },
  searchInputContainer: {
    flexDirection: 'row',
    // marginTop: 10,
    // justifyContent:'center',
    padding: 10,
    backgroundColor: '#e3e0d8',
    width: '85%',
    marginLeft: 10,
    height: 40,
    borderRadius: 5,
    alignItems: 'center'
  }
});