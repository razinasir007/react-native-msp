import React, { useEffect, useState } from 'react'
import {  View,  StyleSheet, FlatList, TextInput, ActivityIndicator } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import { ContactCard } from '../../components/contact/contactCard';
import { dummyData } from '../../constants';
import AddContact from '../../components/contact/addContact';
import serviceHelper from '../../helperFunction';
export const Contact = () => {
  const [searchText, setSearchText] = useState('');
  const [loader, setLoader] = useState(false);
  const [filteredData, setFilteredData] = useState(dummyData);
  const [contactDetails, setContactDetails] = useState([])


  useEffect(() => {
    setLoader(true)
    serviceHelper('contact', 'get').then((res) => {
      if (res.data) {
        setLoader(false)
        setContactDetails(res.data.data)
      }
    })
  }, [])

  const handleSearch = (text) => {
    const filtered = dummyData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase()) || item.email.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleContactClick = (contact) => {
   

  }
  return (
    <View style={styles.container}>

      {
        loader ? <ActivityIndicator style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: 80
        }} />

          :
          <>
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
            <FlatList data={contactDetails} renderItem={({ item }) =>
              <View style={{ marginTop: 10 }} key={item._id}>
                <ContactCard firstname={item.firstname} lastname={item.lastname} email={item.email} handleClick={() => handleContactClick(item)} />
              </View>}
              keyExtractor={item => item._id} />
          </>

      }

     

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
  },
  modalView: {
    margin: 20,
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,  // Increase padding for a larger modal
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
},
Form: {
    paddingTop: 10,
    width: "90%"

},
button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
},
buttonOpen: {
    backgroundColor: '#F194FF',
},
buttonClose: {
    backgroundColor: '#2196F3',
},
checkbox: {
    flexDirection: 'row',
    alignItems:'center',
    marginTop: 10
},
textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
},
modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
},
input: {
    width: '100%',
    height: 35,
    borderColor: 'gray',
    borderWidth: 1,
    // marginTop: 5,
    padding: 10,
    borderRadius: 5,
},
buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
},
closeButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: 'white',
    height: 35,
    borderRadius: 5,
    marginRight: 10,
    width: 75,
    justifyContent: 'center'
},
doneButton: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: 'black',
    height: 35,
    borderRadius: 5,
    width: 75,
    justifyContent: 'center'
}
});